import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveUserFromGroupRequest } from "../models/models_0";
import {
  deserializeAws_queryRemoveUserFromGroupCommand,
  serializeAws_queryRemoveUserFromGroupCommand,
} from "../protocols/Aws_query";
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

export interface RemoveUserFromGroupCommandInput extends RemoveUserFromGroupRequest {}
export interface RemoveUserFromGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified user from the specified group.</p>
 */
export class RemoveUserFromGroupCommand extends $Command<
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveUserFromGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "RemoveUserFromGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveUserFromGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveUserFromGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveUserFromGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveUserFromGroupCommandOutput> {
    return deserializeAws_queryRemoveUserFromGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
