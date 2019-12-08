import { _ComplianceStringFilter } from "./_ComplianceStringFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListComplianceItemsInput shape
 */
export interface ListComplianceItemsInput {
  /**
   * <p>One or more compliance filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: Array<_ComplianceStringFilter> | Iterable<_ComplianceStringFilter>;

  /**
   * <p>The ID for the resources from which to get compliance information. Currently, you can only specify one resource ID.</p>
   */
  ResourceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The type of resource from which to get compliance information. Currently, the only supported resource type is <code>ManagedInstance</code>.</p>
   */
  ResourceTypes?: Array<string> | Iterable<string>;

  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}