import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { FlushStageAuthorizersCacheRequest } from "../models/models_0";
import {
  deserializeAws_restJson1FlushStageAuthorizersCacheCommand,
  serializeAws_restJson1FlushStageAuthorizersCacheCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface FlushStageAuthorizersCacheCommandInput extends FlushStageAuthorizersCacheRequest {}
export interface FlushStageAuthorizersCacheCommandOutput extends __MetadataBearer {}

/**
 * <p>Flushes all authorizer cache entries on a stage.</p>
 */
export class FlushStageAuthorizersCacheCommand extends $Command<
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FlushStageAuthorizersCacheCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FlushStageAuthorizersCacheCommandInput, FlushStageAuthorizersCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "FlushStageAuthorizersCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FlushStageAuthorizersCacheRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FlushStageAuthorizersCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1FlushStageAuthorizersCacheCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<FlushStageAuthorizersCacheCommandOutput> {
    return deserializeAws_restJson1FlushStageAuthorizersCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
