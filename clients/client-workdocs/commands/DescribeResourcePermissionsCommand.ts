import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeResourcePermissionsRequest, DescribeResourcePermissionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeResourcePermissionsCommand,
  serializeAws_restJson1DescribeResourcePermissionsCommand,
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

export interface DescribeResourcePermissionsCommandInput extends DescribeResourcePermissionsRequest {}
export interface DescribeResourcePermissionsCommandOutput
  extends DescribeResourcePermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the permissions of a specified resource.</p>
 */
export class DescribeResourcePermissionsCommand extends $Command<
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeResourcePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeResourcePermissionsCommandInput, DescribeResourcePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeResourcePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeResourcePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeResourcePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeResourcePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeResourcePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeResourcePermissionsCommandOutput> {
    return deserializeAws_restJson1DescribeResourcePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
