// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * This resource allows you to create and manage projects for GitHub repository.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 *
 * const example = new github.Repository("example", {
 *     description: "My awesome codebase",
 *     hasProjects: true,
 * });
 * const project = new github.RepositoryProject("project", {
 *     body: "This is a repository project.",
 *     repository: example.name,
 * });
 * ```
 */
export class RepositoryProject extends pulumi.CustomResource {
    /**
     * Get an existing RepositoryProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RepositoryProjectState, opts?: pulumi.CustomResourceOptions): RepositoryProject {
        return new RepositoryProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/repositoryProject:RepositoryProject';

    /**
     * Returns true if the given object is an instance of RepositoryProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RepositoryProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RepositoryProject.__pulumiType;
    }

    /**
     * The body of the project.
     */
    public readonly body!: pulumi.Output<string | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the project.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The repository of the project.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * URL of the project
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a RepositoryProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RepositoryProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RepositoryProjectArgs | RepositoryProjectState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RepositoryProjectState | undefined;
            inputs["body"] = state ? state.body : undefined;
            inputs["etag"] = state ? state.etag : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["repository"] = state ? state.repository : undefined;
            inputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as RepositoryProjectArgs | undefined;
            if (!args || args.repository === undefined) {
                throw new Error("Missing required property 'repository'");
            }
            inputs["body"] = args ? args.body : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["repository"] = args ? args.repository : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["url"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(RepositoryProject.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RepositoryProject resources.
 */
export interface RepositoryProjectState {
    /**
     * The body of the project.
     */
    readonly body?: pulumi.Input<string>;
    readonly etag?: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The repository of the project.
     */
    readonly repository?: pulumi.Input<string>;
    /**
     * URL of the project
     */
    readonly url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RepositoryProject resource.
 */
export interface RepositoryProjectArgs {
    /**
     * The body of the project.
     */
    readonly body?: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The repository of the project.
     */
    readonly repository: pulumi.Input<string>;
}
