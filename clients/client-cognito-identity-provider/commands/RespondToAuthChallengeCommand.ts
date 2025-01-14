import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { RespondToAuthChallengeRequest, RespondToAuthChallengeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RespondToAuthChallengeCommand,
  serializeAws_json1_1RespondToAuthChallengeCommand,
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

export interface RespondToAuthChallengeCommandInput extends RespondToAuthChallengeRequest {}
export interface RespondToAuthChallengeCommandOutput extends RespondToAuthChallengeResponse, __MetadataBearer {}

/**
 * <p>Responds to the authentication challenge.</p>
 */
export class RespondToAuthChallengeCommand extends $Command<
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RespondToAuthChallengeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RespondToAuthChallengeCommandInput, RespondToAuthChallengeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "RespondToAuthChallengeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RespondToAuthChallengeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RespondToAuthChallengeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RespondToAuthChallengeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RespondToAuthChallengeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RespondToAuthChallengeCommandOutput> {
    return deserializeAws_json1_1RespondToAuthChallengeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
