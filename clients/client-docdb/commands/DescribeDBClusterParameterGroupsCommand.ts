import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DBClusterParameterGroupsMessage, DescribeDBClusterParameterGroupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterParameterGroupsCommand,
  serializeAws_queryDescribeDBClusterParameterGroupsCommand,
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

export interface DescribeDBClusterParameterGroupsCommandInput extends DescribeDBClusterParameterGroupsMessage {}
export interface DescribeDBClusterParameterGroupsCommandOutput
  extends DBClusterParameterGroupsMessage,
    __MetadataBearer {}

/**
 * <p>Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a
 *                 <code>DBClusterParameterGroupName</code> parameter is specified, the list contains
 *             only the description of the specified cluster parameter group. </p>
 */
export class DescribeDBClusterParameterGroupsCommand extends $Command<
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBClusterParameterGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterParameterGroupsCommandInput, DescribeDBClusterParameterGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "DescribeDBClusterParameterGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterParameterGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBClusterParameterGroupsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDBClusterParameterGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterParameterGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterParameterGroupsCommandOutput> {
    return deserializeAws_queryDescribeDBClusterParameterGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
