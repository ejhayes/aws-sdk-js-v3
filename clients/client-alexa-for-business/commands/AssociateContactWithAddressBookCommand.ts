import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { AssociateContactWithAddressBookRequest, AssociateContactWithAddressBookResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateContactWithAddressBookCommand,
  serializeAws_json1_1AssociateContactWithAddressBookCommand,
} from "../protocols/Aws_json1_1";
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

export interface AssociateContactWithAddressBookCommandInput extends AssociateContactWithAddressBookRequest {}
export interface AssociateContactWithAddressBookCommandOutput
  extends AssociateContactWithAddressBookResponse,
    __MetadataBearer {}

/**
 * <p>Associates a contact with a given address book.</p>
 */
export class AssociateContactWithAddressBookCommand extends $Command<
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateContactWithAddressBookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateContactWithAddressBookCommandInput, AssociateContactWithAddressBookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateContactWithAddressBookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateContactWithAddressBookRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateContactWithAddressBookResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateContactWithAddressBookCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateContactWithAddressBookCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateContactWithAddressBookCommandOutput> {
    return deserializeAws_json1_1AssociateContactWithAddressBookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
