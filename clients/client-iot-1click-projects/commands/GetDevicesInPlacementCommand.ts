import {
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import { GetDevicesInPlacementRequest, GetDevicesInPlacementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDevicesInPlacementCommand,
  serializeAws_restJson1GetDevicesInPlacementCommand,
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

export interface GetDevicesInPlacementCommandInput extends GetDevicesInPlacementRequest {}
export interface GetDevicesInPlacementCommandOutput extends GetDevicesInPlacementResponse, __MetadataBearer {}

/**
 * <p>Returns an object enumerating the devices in a placement.</p>
 */
export class GetDevicesInPlacementCommand extends $Command<
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevicesInPlacementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDevicesInPlacementCommandInput, GetDevicesInPlacementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "GetDevicesInPlacementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicesInPlacementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevicesInPlacementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicesInPlacementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDevicesInPlacementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicesInPlacementCommandOutput> {
    return deserializeAws_restJson1GetDevicesInPlacementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
