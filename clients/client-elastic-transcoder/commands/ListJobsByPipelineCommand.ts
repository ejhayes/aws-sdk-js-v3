import {
  ElasticTranscoderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticTranscoderClient";
import { ListJobsByPipelineRequest, ListJobsByPipelineResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListJobsByPipelineCommand,
  serializeAws_restJson1ListJobsByPipelineCommand,
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

export interface ListJobsByPipelineCommandInput extends ListJobsByPipelineRequest {}
export interface ListJobsByPipelineCommandOutput extends ListJobsByPipelineResponse, __MetadataBearer {}

/**
 * <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p>
 *         <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains
 *             one element for each job that satisfies the search criteria.</p>
 */
export class ListJobsByPipelineCommand extends $Command<
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
  ElasticTranscoderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListJobsByPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticTranscoderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsByPipelineCommandInput, ListJobsByPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticTranscoderClient";
    const commandName = "ListJobsByPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobsByPipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListJobsByPipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobsByPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobsByPipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsByPipelineCommandOutput> {
    return deserializeAws_restJson1ListJobsByPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
