import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemTemplatesRequest, SearchSystemTemplatesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchSystemTemplatesCommand,
  serializeAws_json1_1SearchSystemTemplatesCommand,
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

export interface SearchSystemTemplatesCommandInput extends SearchSystemTemplatesRequest {}
export interface SearchSystemTemplatesCommandOutput extends SearchSystemTemplatesResponse, __MetadataBearer {}

/**
 * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
 */
export class SearchSystemTemplatesCommand extends $Command<
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchSystemTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "SearchSystemTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchSystemTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchSystemTemplatesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchSystemTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchSystemTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchSystemTemplatesCommandOutput> {
    return deserializeAws_json1_1SearchSystemTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
