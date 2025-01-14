import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { GetAppliedSchemaVersionRequest, GetAppliedSchemaVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAppliedSchemaVersionCommand,
  serializeAws_restJson1GetAppliedSchemaVersionCommand,
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

export interface GetAppliedSchemaVersionCommandInput extends GetAppliedSchemaVersionRequest {}
export interface GetAppliedSchemaVersionCommandOutput extends GetAppliedSchemaVersionResponse, __MetadataBearer {}

/**
 * <p>Returns current applied schema version ARN, including the minor version in use.</p>
 */
export class GetAppliedSchemaVersionCommand extends $Command<
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAppliedSchemaVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAppliedSchemaVersionCommandInput, GetAppliedSchemaVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "GetAppliedSchemaVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAppliedSchemaVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppliedSchemaVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAppliedSchemaVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAppliedSchemaVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAppliedSchemaVersionCommandOutput> {
    return deserializeAws_restJson1GetAppliedSchemaVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
