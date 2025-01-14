import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";
import { GetCloudFormationTemplateRequest, GetCloudFormationTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCloudFormationTemplateCommand,
  serializeAws_restJson1GetCloudFormationTemplateCommand,
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

export interface GetCloudFormationTemplateCommandInput extends GetCloudFormationTemplateRequest {}
export interface GetCloudFormationTemplateCommandOutput extends GetCloudFormationTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets the specified AWS CloudFormation template.</p>
 */
export class GetCloudFormationTemplateCommand extends $Command<
  GetCloudFormationTemplateCommandInput,
  GetCloudFormationTemplateCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCloudFormationTemplateCommandInput) {
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
  ): Handler<GetCloudFormationTemplateCommandInput, GetCloudFormationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "GetCloudFormationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCloudFormationTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFormationTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCloudFormationTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCloudFormationTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCloudFormationTemplateCommandOutput> {
    return deserializeAws_restJson1GetCloudFormationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
