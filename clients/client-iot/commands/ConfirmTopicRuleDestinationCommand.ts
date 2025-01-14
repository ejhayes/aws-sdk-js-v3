import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ConfirmTopicRuleDestinationRequest, ConfirmTopicRuleDestinationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ConfirmTopicRuleDestinationCommand,
  serializeAws_restJson1ConfirmTopicRuleDestinationCommand,
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

export interface ConfirmTopicRuleDestinationCommandInput extends ConfirmTopicRuleDestinationRequest {}
export interface ConfirmTopicRuleDestinationCommandOutput
  extends ConfirmTopicRuleDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Confirms a topic rule destination. When you create a rule requiring a destination, AWS
 *          IoT sends a confirmation message to the endpoint or base address you specify. The message
 *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
 *          to confirm that you own or have access to the endpoint.</p>
 */
export class ConfirmTopicRuleDestinationCommand extends $Command<
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ConfirmTopicRuleDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmTopicRuleDestinationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmTopicRuleDestinationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfirmTopicRuleDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmTopicRuleDestinationCommandOutput> {
    return deserializeAws_restJson1ConfirmTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
