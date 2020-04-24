// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 * 
 * const test = github.getIpRanges();
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-github/blob/master/website/docs/d/ip_ranges.html.markdown.
 */
export function getIpRanges(opts?: pulumi.InvokeOptions): Promise<GetIpRangesResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("github:index/getIpRanges:getIpRanges", {
    }, opts);
}

/**
 * A collection of values returned by getIpRanges.
 */
export interface GetIpRangesResult {
    /**
     * An Array of IP addresses in CIDR format specifying the Git servers.
     */
    readonly gits: string[];
    /**
     * An Array of IP addresses in CIDR format specifying the addresses that incoming service hooks will originate from.
     */
    readonly hooks: string[];
    /**
     * An Array of IP addresses in CIDR format specifying the A records for GitHub Importer.
     */
    readonly importers: string[];
    /**
     * An Array of IP addresses in CIDR format specifying the A records for GitHub Pages.
     */
    readonly pages: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
