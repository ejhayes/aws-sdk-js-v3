import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { GetBotAliasRequest, GetBotAliasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBotAliasCommand,
  serializeAws_restJson1GetBotAliasCommand,
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

export interface GetBotAliasCommandInput extends GetBotAliasRequest {}
export interface GetBotAliasCommandOutput extends GetBotAliasResponse, __MetadataBearer {}

/**
 * <p>Returns information about an Amazon Lex bot alias. For more information
 *       about aliases, see <a>versioning-aliases</a>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotAlias</code> action.</p>
 */
export class GetBotAliasCommand extends $Command<
  GetBotAliasCommandInput,
  GetBotAliasCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBotAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotAliasCommandInput, GetBotAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBotAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotAliasCommandOutput> {
    return deserializeAws_restJson1GetBotAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
