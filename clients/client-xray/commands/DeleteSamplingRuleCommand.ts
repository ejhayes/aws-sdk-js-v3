import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { DeleteSamplingRuleRequest, DeleteSamplingRuleResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSamplingRuleCommand,
  serializeAws_restJson1DeleteSamplingRuleCommand,
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

export interface DeleteSamplingRuleCommandInput extends DeleteSamplingRuleRequest {}
export interface DeleteSamplingRuleCommandOutput extends DeleteSamplingRuleResult, __MetadataBearer {}

/**
 * <p>Deletes a sampling rule.</p>
 */
export class DeleteSamplingRuleCommand extends $Command<
  DeleteSamplingRuleCommandInput,
  DeleteSamplingRuleCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSamplingRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSamplingRuleCommandInput, DeleteSamplingRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "DeleteSamplingRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSamplingRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSamplingRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSamplingRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSamplingRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSamplingRuleCommandOutput> {
    return deserializeAws_restJson1DeleteSamplingRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
