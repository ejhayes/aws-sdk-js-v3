import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateStandardsControlRequest, UpdateStandardsControlResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateStandardsControlCommand,
  serializeAws_restJson1UpdateStandardsControlCommand,
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

export interface UpdateStandardsControlCommandInput extends UpdateStandardsControlRequest {}
export interface UpdateStandardsControlCommandOutput extends UpdateStandardsControlResponse, __MetadataBearer {}

/**
 * <p>Used to control whether an individual security standard control is enabled or
 *          disabled.</p>
 */
export class UpdateStandardsControlCommand extends $Command<
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStandardsControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStandardsControlCommandInput, UpdateStandardsControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateStandardsControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStandardsControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStandardsControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStandardsControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateStandardsControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStandardsControlCommandOutput> {
    return deserializeAws_restJson1UpdateStandardsControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
