import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterRequest, DescribeClusterResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeClusterCommand,
  serializeAws_restJson1DescribeClusterCommand,
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

export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
export interface DescribeClusterCommandOutput extends DescribeClusterResponse, __MetadataBearer {}

/**
 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
 */
export class DescribeClusterCommand extends $Command<
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeClusterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterCommandOutput> {
    return deserializeAws_restJson1DescribeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
