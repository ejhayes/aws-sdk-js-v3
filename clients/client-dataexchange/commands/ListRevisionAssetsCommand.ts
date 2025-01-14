import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { ListRevisionAssetsRequest, ListRevisionAssetsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListRevisionAssetsCommand,
  serializeAws_restJson1ListRevisionAssetsCommand,
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

export interface ListRevisionAssetsCommandInput extends ListRevisionAssetsRequest {}
export interface ListRevisionAssetsCommandOutput extends ListRevisionAssetsResponse, __MetadataBearer {}

/**
 * <p>This operation lists a revision's assets sorted alphabetically in descending order.</p>
 */
export class ListRevisionAssetsCommand extends $Command<
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRevisionAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "ListRevisionAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRevisionAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRevisionAssetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRevisionAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRevisionAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRevisionAssetsCommandOutput> {
    return deserializeAws_restJson1ListRevisionAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
