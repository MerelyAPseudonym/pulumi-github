// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Use this data source to retrieve the collaborators for a given repository.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 *
 * const test = pulumi.output(github.getCollaborators({
 *     owner: "example_owner",
 *     repository: "example_repository",
 * }, { async: true }));
 * ```
 */
export function getCollaborators(args: GetCollaboratorsArgs, opts?: pulumi.InvokeOptions): Promise<GetCollaboratorsResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("github:index/getCollaborators:getCollaborators", {
        "affiliation": args.affiliation,
        "owner": args.owner,
        "repository": args.repository,
    }, opts);
}

/**
 * A collection of arguments for invoking getCollaborators.
 */
export interface GetCollaboratorsArgs {
    /**
     * Filter collaborators returned by their affiliation. Can be one of: `outside`, `direct`, `all`.  Defaults to `all`.
     */
    readonly affiliation?: string;
    /**
     * The organization that owns the repository.
     */
    readonly owner: string;
    /**
     * The name of the repository.
     */
    readonly repository: string;
}

/**
 * A collection of values returned by getCollaborators.
 */
export interface GetCollaboratorsResult {
    readonly affiliation?: string;
    /**
     * An Array of GitHub collaborators.  Each `collaborator` block consists of the fields documented below.
     */
    readonly collaborators: outputs.GetCollaboratorsCollaborator[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly owner: string;
    readonly repository: string;
}
