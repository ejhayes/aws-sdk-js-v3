import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { DisassociateResourceShareRequest, DisassociateResourceShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateResourceShareCommand,
  serializeAws_restJson1DisassociateResourceShareCommand,
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

export interface DisassociateResourceShareCommandInput extends DisassociateResourceShareRequest {}
export interface DisassociateResourceShareCommandOutput extends DisassociateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Disassociates the specified principals or resources from the specified resource share.</p>
 */
export class DisassociateResourceShareCommand extends $Command<
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateResourceShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateResourceShareCommandInput, DisassociateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DisassociateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResourceShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResourceShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateResourceShareCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResourceShareCommandOutput> {
    return deserializeAws_restJson1DisassociateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
