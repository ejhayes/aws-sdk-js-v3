import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { CreateGlobalNetworkRequest, CreateGlobalNetworkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGlobalNetworkCommand,
  serializeAws_restJson1CreateGlobalNetworkCommand,
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

export interface CreateGlobalNetworkCommandInput extends CreateGlobalNetworkRequest {}
export interface CreateGlobalNetworkCommandOutput extends CreateGlobalNetworkResponse, __MetadataBearer {}

/**
 * <p>Creates a new, empty global network.</p>
 */
export class CreateGlobalNetworkCommand extends $Command<
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGlobalNetworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGlobalNetworkCommandInput, CreateGlobalNetworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateGlobalNetworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlobalNetworkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGlobalNetworkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGlobalNetworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGlobalNetworkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGlobalNetworkCommandOutput> {
    return deserializeAws_restJson1CreateGlobalNetworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
