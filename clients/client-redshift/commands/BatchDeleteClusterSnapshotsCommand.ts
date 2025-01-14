import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/models_0";
import {
  deserializeAws_queryBatchDeleteClusterSnapshotsCommand,
  serializeAws_queryBatchDeleteClusterSnapshotsCommand,
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

export interface BatchDeleteClusterSnapshotsCommandInput extends BatchDeleteClusterSnapshotsRequest {}
export interface BatchDeleteClusterSnapshotsCommandOutput extends BatchDeleteClusterSnapshotsResult, __MetadataBearer {}

/**
 * <p>Deletes a set of cluster snapshots.</p>
 */
export class BatchDeleteClusterSnapshotsCommand extends $Command<
  BatchDeleteClusterSnapshotsCommandInput,
  BatchDeleteClusterSnapshotsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteClusterSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "BatchDeleteClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteClusterSnapshotsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteClusterSnapshotsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchDeleteClusterSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteClusterSnapshotsCommandOutput> {
    return deserializeAws_queryBatchDeleteClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
