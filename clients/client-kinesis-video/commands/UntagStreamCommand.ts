import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UntagStreamInput, UntagStreamOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UntagStreamCommand,
  serializeAws_restJson1UntagStreamCommand,
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

export interface UntagStreamCommandInput extends UntagStreamInput {}
export interface UntagStreamCommandOutput extends UntagStreamOutput, __MetadataBearer {}

/**
 * <p>Removes one or more tags from a stream. In the request, specify only a tag key or
 *             keys; don't specify the value. If you specify a tag key that does not exist, it's
 *             ignored.</p>
 *         <p>In the request, you must provide the <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 */
export class UntagStreamCommand extends $Command<
  UntagStreamCommandInput,
  UntagStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagStreamCommandInput, UntagStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UntagStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: UntagStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UntagStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagStreamCommandOutput> {
    return deserializeAws_restJson1UntagStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
