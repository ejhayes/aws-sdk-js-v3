import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  DisassociateWebsiteAuthorizationProviderRequest,
  DisassociateWebsiteAuthorizationProviderResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand,
  serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand,
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

export interface DisassociateWebsiteAuthorizationProviderCommandInput
  extends DisassociateWebsiteAuthorizationProviderRequest {}
export interface DisassociateWebsiteAuthorizationProviderCommandOutput
  extends DisassociateWebsiteAuthorizationProviderResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a website authorization provider from a specified fleet. After the
 *             disassociation, users can't load any associated websites that require this authorization
 *             provider.</p>
 */
export class DisassociateWebsiteAuthorizationProviderCommand extends $Command<
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateWebsiteAuthorizationProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateWebsiteAuthorizationProviderCommandInput,
    DisassociateWebsiteAuthorizationProviderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DisassociateWebsiteAuthorizationProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateWebsiteAuthorizationProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateWebsiteAuthorizationProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> {
    return deserializeAws_restJson1DisassociateWebsiteAuthorizationProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
