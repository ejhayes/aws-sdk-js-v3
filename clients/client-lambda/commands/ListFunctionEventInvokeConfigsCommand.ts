import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListFunctionEventInvokeConfigsRequest, ListFunctionEventInvokeConfigsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand,
  serializeAws_restJson1ListFunctionEventInvokeConfigsCommand,
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

export interface ListFunctionEventInvokeConfigsCommandInput extends ListFunctionEventInvokeConfigsRequest {}
export interface ListFunctionEventInvokeConfigsCommandOutput
  extends ListFunctionEventInvokeConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of configurations for asynchronous invocation for a function.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 */
export class ListFunctionEventInvokeConfigsCommand extends $Command<
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFunctionEventInvokeConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionEventInvokeConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionEventInvokeConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionEventInvokeConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListFunctionEventInvokeConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionEventInvokeConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFunctionEventInvokeConfigsCommandOutput> {
    return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
