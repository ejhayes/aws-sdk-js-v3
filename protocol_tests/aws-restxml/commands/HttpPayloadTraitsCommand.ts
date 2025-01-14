import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";
import { HttpPayloadTraitsInputOutput } from "../models/models_0";
import {
  deserializeAws_restXmlHttpPayloadTraitsCommand,
  serializeAws_restXmlHttpPayloadTraitsCommand,
} from "../protocols/Aws_restXml";
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

export interface HttpPayloadTraitsCommandInput extends HttpPayloadTraitsInputOutput {}
export interface HttpPayloadTraitsCommandOutput extends HttpPayloadTraitsInputOutput, __MetadataBearer {}

/**
 * This examples serializes a blob shape in the payload.
 *
 * In this example, no XML document is synthesized because the payload is
 * not a structure or a union type.
 */
export class HttpPayloadTraitsCommand extends $Command<
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadTraitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "HttpPayloadTraitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadTraitsInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadTraitsInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: HttpPayloadTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlHttpPayloadTraitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadTraitsCommandOutput> {
    return deserializeAws_restXmlHttpPayloadTraitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
