// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

let __config = new pulumi.Config("github");

/**
 * Authenticate without a token. When `anonymous`is true, the provider will not be able to access resourcesthat require
 * authentication.
 */
export let anonymous: boolean | undefined = __config.getObject<boolean>("anonymous");
/**
 * The GitHub Base API URL
 */
export let baseUrl: string | undefined = __config.get("baseUrl");
/**
 * Run outside an organization. When `individual`is true, the provider will run outside the scope of anorganization.
 */
export let individual: boolean | undefined = __config.getObject<boolean>("individual");
/**
 * Whether server should be accessed without verifying the TLS certificate.
 */
export let insecure: boolean | undefined = __config.getObject<boolean>("insecure");
/**
 * The GitHub organization name to manage. If `individual` is false, `organization` is required.
 */
export let organization: string | undefined = __config.get("organization");
/**
 * The OAuth token used to connect to GitHub. If `anonymous` is false, `token` is required.
 */
export let token: string | undefined = __config.get("token");
