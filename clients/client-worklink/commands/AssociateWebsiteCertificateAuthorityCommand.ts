import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  AssociateWebsiteCertificateAuthorityRequest,
  AssociateWebsiteCertificateAuthorityResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand,
  serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand,
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

export interface AssociateWebsiteCertificateAuthorityCommandInput extends AssociateWebsiteCertificateAuthorityRequest {}
export interface AssociateWebsiteCertificateAuthorityCommandOutput
  extends AssociateWebsiteCertificateAuthorityResponse,
    __MetadataBearer {}

/**
 * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
 *             certificates used by associated websites within the company network.</p>
 */
export class AssociateWebsiteCertificateAuthorityCommand extends $Command<
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateWebsiteCertificateAuthorityCommandInput) {
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
  ): Handler<AssociateWebsiteCertificateAuthorityCommandInput, AssociateWebsiteCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "AssociateWebsiteCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateWebsiteCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWebsiteCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1AssociateWebsiteCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
