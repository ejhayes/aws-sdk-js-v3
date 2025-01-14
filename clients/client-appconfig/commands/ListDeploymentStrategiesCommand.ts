import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeploymentStrategies, ListDeploymentStrategiesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ListDeploymentStrategiesCommand,
  serializeAws_restJson1ListDeploymentStrategiesCommand,
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

export interface ListDeploymentStrategiesCommandInput extends ListDeploymentStrategiesRequest {}
export interface ListDeploymentStrategiesCommandOutput extends DeploymentStrategies, __MetadataBearer {}

/**
 * <p>List deployment strategies.</p>
 */
export class ListDeploymentStrategiesCommand extends $Command<
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentStrategiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentStrategiesCommandInput, ListDeploymentStrategiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListDeploymentStrategiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentStrategiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategies.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentStrategiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeploymentStrategiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentStrategiesCommandOutput> {
    return deserializeAws_restJson1ListDeploymentStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
