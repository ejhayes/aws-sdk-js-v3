import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAvailabilityZonesRequest, DescribeAvailabilityZonesResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeAvailabilityZonesCommand,
  serializeAws_ec2DescribeAvailabilityZonesCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeAvailabilityZonesCommandInput = DescribeAvailabilityZonesRequest;
export type DescribeAvailabilityZonesCommandOutput = DescribeAvailabilityZonesResult & __MetadataBearer;

export class DescribeAvailabilityZonesCommand extends $Command<
  DescribeAvailabilityZonesCommandInput,
  DescribeAvailabilityZonesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAvailabilityZonesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAvailabilityZonesCommandInput, DescribeAvailabilityZonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DescribeAvailabilityZonesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAvailabilityZonesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAvailabilityZonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAvailabilityZonesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityZonesCommandOutput> {
    return deserializeAws_ec2DescribeAvailabilityZonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
