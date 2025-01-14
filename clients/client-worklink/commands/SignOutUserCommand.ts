import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { SignOutUserRequest, SignOutUserResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SignOutUserCommand,
  serializeAws_restJson1SignOutUserCommand,
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

export interface SignOutUserCommandInput extends SignOutUserRequest {}
export interface SignOutUserCommandOutput extends SignOutUserResponse, __MetadataBearer {}

/**
 * <p>Signs the user out from all of their devices. The user can sign in again if they have
 *             valid credentials.</p>
 */
export class SignOutUserCommand extends $Command<
  SignOutUserCommandInput,
  SignOutUserCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SignOutUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SignOutUserCommandInput, SignOutUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "SignOutUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignOutUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SignOutUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignOutUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SignOutUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignOutUserCommandOutput> {
    return deserializeAws_restJson1SignOutUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
