import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AliasConfiguration, GetAliasRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetAliasCommand,
  serializeAws_restJson1GetAliasCommand,
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

export interface GetAliasCommandInput extends GetAliasRequest {}
export interface GetAliasCommandOutput extends AliasConfiguration, __MetadataBearer {}

/**
 * <p>Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 */
export class GetAliasCommand extends $Command<GetAliasCommandInput, GetAliasCommandOutput, LambdaClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAliasCommandInput, GetAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AliasConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAliasCommandOutput> {
    return deserializeAws_restJson1GetAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
