// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to retrieve information about a GitHub release in a specific repository.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 * 
 * const example = pulumi.output(github.getRelease({
 *     owner: "example-owner",
 *     repository: "example-repository",
 *     retrieveBy: "latest",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-github/blob/master/website/docs/d/release.html.markdown.
 */
export function getRelease(args: GetReleaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReleaseResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("github:index/getRelease:getRelease", {
        "owner": args.owner,
        "releaseId": args.releaseId,
        "releaseTag": args.releaseTag,
        "repository": args.repository,
        "retrieveBy": args.retrieveBy,
    }, opts);
}

/**
 * A collection of arguments for invoking getRelease.
 */
export interface GetReleaseArgs {
    /**
     * Owner of the repository.
     */
    readonly owner: string;
    /**
     * ID of the release to retrieve. Must be specified when `retrieveBy` = `id`.
     */
    readonly releaseId?: number;
    /**
     * Tag of the release to retrieve. Must be specified when `retrieveBy` = `tag`.
     */
    readonly releaseTag?: string;
    /**
     * Name of the repository to retrieve the release from.
     */
    readonly repository: string;
    /**
     * Describes how to fetch the release. Valid values are `id`, `tag`, `latest`.
     */
    readonly retrieveBy: string;
}

/**
 * A collection of values returned by getRelease.
 */
export interface GetReleaseResult {
    /**
     * URL of any associated assets with the release
     */
    readonly assertsUrl: string;
    /**
     * Contents of the description (body) of a release
     */
    readonly body: string;
    /**
     * Date of release creation
     */
    readonly createdAt: string;
    /**
     * (`Boolean`) indicates whether the release is a draft
     */
    readonly draft: boolean;
    /**
     * URL directing to detailed information on the release
     */
    readonly htmlUrl: string;
    /**
     * Name of release
     */
    readonly name: string;
    readonly owner: string;
    /**
     * (`Boolean`) indicates whether the release is a prerelease
     */
    readonly prerelease: boolean;
    /**
     * Date of release publishing
     */
    readonly publishedAt: string;
    /**
     * ID of release
     */
    readonly releaseId?: number;
    /**
     * Tag of release
     */
    readonly releaseTag?: string;
    readonly repository: string;
    readonly retrieveBy: string;
    /**
     * Download URL of a specific release in `tar.gz` format
     */
    readonly tarballUrl: string;
    /**
     * Commitish value that determines where the Git release is created from
     */
    readonly targetCommitish: string;
    /**
     * URL that can be used to upload Assets to the release
     */
    readonly uploadUrl: string;
    /**
     * Base URL of the release
     */
    readonly url: string;
    /**
     * Download URL of a specific release in `zip` format
     */
    readonly zipballUrl: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
