import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";
import { CreateCloudFormationTemplateRequest, CreateCloudFormationTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCloudFormationTemplateCommand,
  serializeAws_restJson1CreateCloudFormationTemplateCommand,
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

export interface CreateCloudFormationTemplateCommandInput extends CreateCloudFormationTemplateRequest {}
export interface CreateCloudFormationTemplateCommandOutput
  extends CreateCloudFormationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation template.</p>
 */
export class CreateCloudFormationTemplateCommand extends $Command<
  CreateCloudFormationTemplateCommandInput,
  CreateCloudFormationTemplateCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCloudFormationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCloudFormationTemplateCommandInput, CreateCloudFormationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "CreateCloudFormationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCloudFormationTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCloudFormationTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCloudFormationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCloudFormationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCloudFormationTemplateCommandOutput> {
    return deserializeAws_restJson1CreateCloudFormationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
