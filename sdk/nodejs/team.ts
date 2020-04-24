// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a GitHub team resource.
 * 
 * This resource allows you to add/remove teams from your organization. When applied,
 * a new team will be created. When destroyed, that team will be removed.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 * 
 * // Add a team to the organization
 * const someTeam = new github.Team("someTeam", {
 *     description: "Some cool team",
 *     privacy: "closed",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-github/blob/master/website/docs/r/team.html.markdown.
 */
export class Team extends pulumi.CustomResource {
    /**
     * Get an existing Team resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamState, opts?: pulumi.CustomResourceOptions): Team {
        return new Team(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/team:Team';

    /**
     * Returns true if the given object is an instance of Team.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Team {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Team.__pulumiType;
    }

    /**
     * A description of the team.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise.
     */
    public readonly ldapDn!: pulumi.Output<string | undefined>;
    /**
     * The name of the team.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly nodeId!: pulumi.Output<string>;
    /**
     * The ID of the parent team, if this is a nested team.
     */
    public readonly parentTeamId!: pulumi.Output<number | undefined>;
    /**
     * The level of privacy for the team. Must be one of `secret` or `closed`.
     * Defaults to `secret`.
     */
    public readonly privacy!: pulumi.Output<string | undefined>;
    /**
     * The slug of the created team, which may or may not differ from `name`,
     * depending on whether `name` contains "URL-unsafe" characters.
     * Useful when referencing the team in [`github..BranchProtection`](https://www.terraform.io/docs/providers/github/r/branch_protection.html).
     */
    public /*out*/ readonly slug!: pulumi.Output<string>;

    /**
     * Create a Team resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TeamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamArgs | TeamState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TeamState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["etag"] = state ? state.etag : undefined;
            inputs["ldapDn"] = state ? state.ldapDn : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nodeId"] = state ? state.nodeId : undefined;
            inputs["parentTeamId"] = state ? state.parentTeamId : undefined;
            inputs["privacy"] = state ? state.privacy : undefined;
            inputs["slug"] = state ? state.slug : undefined;
        } else {
            const args = argsOrState as TeamArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["ldapDn"] = args ? args.ldapDn : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["parentTeamId"] = args ? args.parentTeamId : undefined;
            inputs["privacy"] = args ? args.privacy : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["nodeId"] = undefined /*out*/;
            inputs["slug"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Team.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Team resources.
 */
export interface TeamState {
    /**
     * A description of the team.
     */
    readonly description?: pulumi.Input<string>;
    readonly etag?: pulumi.Input<string>;
    /**
     * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise.
     */
    readonly ldapDn?: pulumi.Input<string>;
    /**
     * The name of the team.
     */
    readonly name?: pulumi.Input<string>;
    readonly nodeId?: pulumi.Input<string>;
    /**
     * The ID of the parent team, if this is a nested team.
     */
    readonly parentTeamId?: pulumi.Input<number>;
    /**
     * The level of privacy for the team. Must be one of `secret` or `closed`.
     * Defaults to `secret`.
     */
    readonly privacy?: pulumi.Input<string>;
    /**
     * The slug of the created team, which may or may not differ from `name`,
     * depending on whether `name` contains "URL-unsafe" characters.
     * Useful when referencing the team in [`github..BranchProtection`](https://www.terraform.io/docs/providers/github/r/branch_protection.html).
     */
    readonly slug?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Team resource.
 */
export interface TeamArgs {
    /**
     * A description of the team.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise.
     */
    readonly ldapDn?: pulumi.Input<string>;
    /**
     * The name of the team.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the parent team, if this is a nested team.
     */
    readonly parentTeamId?: pulumi.Input<number>;
    /**
     * The level of privacy for the team. Must be one of `secret` or `closed`.
     * Defaults to `secret`.
     */
    readonly privacy?: pulumi.Input<string>;
}
