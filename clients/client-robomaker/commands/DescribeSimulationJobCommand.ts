import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { DescribeSimulationJobRequest, DescribeSimulationJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSimulationJobCommand,
  serializeAws_restJson1DescribeSimulationJobCommand,
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

export interface DescribeSimulationJobCommandInput extends DescribeSimulationJobRequest {}
export interface DescribeSimulationJobCommandOutput extends DescribeSimulationJobResponse, __MetadataBearer {}

/**
 * <p>Describes a simulation job.</p>
 */
export class DescribeSimulationJobCommand extends $Command<
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSimulationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSimulationJobCommandInput, DescribeSimulationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeSimulationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSimulationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSimulationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSimulationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSimulationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSimulationJobCommandOutput> {
    return deserializeAws_restJson1DescribeSimulationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
