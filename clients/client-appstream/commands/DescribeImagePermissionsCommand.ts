import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeImagePermissionsRequest, DescribeImagePermissionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImagePermissionsCommand,
  serializeAws_json1_1DescribeImagePermissionsCommand,
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

export interface DescribeImagePermissionsCommandInput extends DescribeImagePermissionsRequest {}
export interface DescribeImagePermissionsCommandOutput extends DescribeImagePermissionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the permissions for shared AWS account IDs on a private image that you own. </p>
 */
export class DescribeImagePermissionsCommand extends $Command<
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImagePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImagePermissionsCommandInput, DescribeImagePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeImagePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImagePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImagePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImagePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImagePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImagePermissionsCommandOutput> {
    return deserializeAws_json1_1DescribeImagePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
