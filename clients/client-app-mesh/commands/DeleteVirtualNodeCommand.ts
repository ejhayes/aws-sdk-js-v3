import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteVirtualNodeInput, DeleteVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteVirtualNodeCommand,
  serializeAws_restJson1DeleteVirtualNodeCommand,
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

export interface DeleteVirtualNodeCommandInput extends DeleteVirtualNodeInput {}
export interface DeleteVirtualNodeCommandOutput extends DeleteVirtualNodeOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing virtual node.</p>
 *          <p>You must delete any virtual services that list a virtual node as a service provider
 *          before you can delete the virtual node itself.</p>
 */
export class DeleteVirtualNodeCommand extends $Command<
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVirtualNodeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVirtualNodeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteVirtualNodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVirtualNodeCommandOutput> {
    return deserializeAws_restJson1DeleteVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
