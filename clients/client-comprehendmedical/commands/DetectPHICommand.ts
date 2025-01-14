import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { DetectPHIRequest, DetectPHIResponse } from "../models/models_0";
import { deserializeAws_json1_1DetectPHICommand, serializeAws_json1_1DetectPHICommand } from "../protocols/Aws_json1_1";
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

export interface DetectPHICommandInput extends DetectPHIRequest {}
export interface DetectPHICommandOutput extends DetectPHIResponse, __MetadataBearer {}

/**
 * <p> Inspects the clinical text for protected health information (PHI) entities and returns
 *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
 *       only detects entities in English language texts.</p>
 */
export class DetectPHICommand extends $Command<
  DetectPHICommandInput,
  DetectPHICommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectPHICommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectPHICommandInput, DetectPHICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DetectPHICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectPHIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetectPHIResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectPHICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectPHICommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectPHICommandOutput> {
    return deserializeAws_json1_1DetectPHICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
