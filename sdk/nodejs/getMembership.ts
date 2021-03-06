// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to find out if a user is a member of your organization, as well
 * as what role they have within it.
 * If the user's membership in the organization is pending their acceptance of an invite,
 * the role they would have once they accept will be returned.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 *
 * const membershipForSomeUser = pulumi.output(github.getMembership({
 *     username: "SomeUser",
 * }, { async: true }));
 * ```
 */
export function getMembership(args: GetMembershipArgs, opts?: pulumi.InvokeOptions): Promise<GetMembershipResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("github:index/getMembership:getMembership", {
        "organization": args.organization,
        "username": args.username,
    }, opts);
}

/**
 * A collection of arguments for invoking getMembership.
 */
export interface GetMembershipArgs {
    /**
     * The organization to check for the above username.
     */
    readonly organization?: string;
    /**
     * The username to lookup in the organization.
     */
    readonly username: string;
}

/**
 * A collection of values returned by getMembership.
 */
export interface GetMembershipResult {
    /**
     * An etag representing the membership object.
     */
    readonly etag: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly organization?: string;
    /**
     * `admin` or `member` -- the role the user has within the organization.
     */
    readonly role: string;
    /**
     * The username.
     */
    readonly username: string;
}
