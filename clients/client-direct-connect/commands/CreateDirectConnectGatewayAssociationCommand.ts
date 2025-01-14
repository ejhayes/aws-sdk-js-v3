import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  CreateDirectConnectGatewayAssociationRequest,
  CreateDirectConnectGatewayAssociationResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand,
  serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand,
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

export interface CreateDirectConnectGatewayAssociationCommandInput
  extends CreateDirectConnectGatewayAssociationRequest {}
export interface CreateDirectConnectGatewayAssociationCommandOutput
  extends CreateDirectConnectGatewayAssociationResult,
    __MetadataBearer {}

/**
 * <p>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual
 *       private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</p>
 */
export class CreateDirectConnectGatewayAssociationCommand extends $Command<
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectConnectGatewayAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDirectConnectGatewayAssociationCommandInput, CreateDirectConnectGatewayAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectConnectGatewayAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectConnectGatewayAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateDirectConnectGatewayAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayAssociationCommandOutput> {
    return deserializeAws_json1_1CreateDirectConnectGatewayAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
