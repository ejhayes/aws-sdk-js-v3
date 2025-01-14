import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { AttachObjectRequest, AttachObjectResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AttachObjectCommand,
  serializeAws_restJson1AttachObjectCommand,
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

export interface AttachObjectCommandInput extends AttachObjectRequest {}
export interface AttachObjectCommandOutput extends AttachObjectResponse, __MetadataBearer {}

/**
 * <p>Attaches an existing object to another object. An object can be accessed in two
 *       ways:</p>
 *          <ol>
 *             <li>
 *                <p>Using the path</p>
 *             </li>
 *             <li>
 *                <p>Using <code>ObjectIdentifier</code>
 *                </p>
 *             </li>
 *          </ol>
 */
export class AttachObjectCommand extends $Command<
  AttachObjectCommandInput,
  AttachObjectCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachObjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachObjectCommandInput, AttachObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "AttachObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachObjectResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AttachObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachObjectCommandOutput> {
    return deserializeAws_restJson1AttachObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
