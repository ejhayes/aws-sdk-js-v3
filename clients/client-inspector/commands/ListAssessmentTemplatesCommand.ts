import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAssessmentTemplatesCommand,
  serializeAws_json1_1ListAssessmentTemplatesCommand,
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

export interface ListAssessmentTemplatesCommandInput extends ListAssessmentTemplatesRequest {}
export interface ListAssessmentTemplatesCommandOutput extends ListAssessmentTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the assessment templates that correspond to the assessment targets that are
 *          specified by the ARNs of the assessment targets.</p>
 */
export class ListAssessmentTemplatesCommand extends $Command<
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssessmentTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssessmentTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssessmentTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssessmentTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssessmentTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentTemplatesCommandOutput> {
    return deserializeAws_json1_1ListAssessmentTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
