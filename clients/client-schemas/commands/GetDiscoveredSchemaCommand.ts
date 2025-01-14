import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetDiscoveredSchemaCommand,
  serializeAws_restJson1GetDiscoveredSchemaCommand,
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

export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {}
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {}

/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 */
export class GetDiscoveredSchemaCommand extends $Command<
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDiscoveredSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetDiscoveredSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDiscoveredSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoveredSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDiscoveredSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDiscoveredSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoveredSchemaCommandOutput> {
    return deserializeAws_restJson1GetDiscoveredSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
