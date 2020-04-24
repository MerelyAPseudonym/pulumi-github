// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Provides a resource to manage GitHub repository collaborator invitations.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as github from "@pulumi/github";
 * 
 * const exampleRepository = new github.Repository("example", {});
 * const exampleRepositoryCollaborator = new github.RepositoryCollaborator("example", {
 *     permission: "push",
 *     repository: exampleRepository.name,
 *     username: "example-username",
 * });
 * const invitee = new github.Provider("invitee", {
 *     token: var_invitee_token,
 * });
 * const exampleUserInvitationAccepter = new github.UserInvitationAccepter("example", {
 *     invitationId: exampleRepositoryCollaborator.invitationId,
 * }, {provider: invitee});
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-github/blob/master/website/docs/r/user_invitation_accepter.html.markdown.
 */
export class UserInvitationAccepter extends pulumi.CustomResource {
    /**
     * Get an existing UserInvitationAccepter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserInvitationAccepterState, opts?: pulumi.CustomResourceOptions): UserInvitationAccepter {
        return new UserInvitationAccepter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/userInvitationAccepter:UserInvitationAccepter';

    /**
     * Returns true if the given object is an instance of UserInvitationAccepter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserInvitationAccepter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserInvitationAccepter.__pulumiType;
    }

    /**
     * ID of the invitation to accept
     */
    public readonly invitationId!: pulumi.Output<string>;

    /**
     * Create a UserInvitationAccepter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserInvitationAccepterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserInvitationAccepterArgs | UserInvitationAccepterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as UserInvitationAccepterState | undefined;
            inputs["invitationId"] = state ? state.invitationId : undefined;
        } else {
            const args = argsOrState as UserInvitationAccepterArgs | undefined;
            if (!args || args.invitationId === undefined) {
                throw new Error("Missing required property 'invitationId'");
            }
            inputs["invitationId"] = args ? args.invitationId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(UserInvitationAccepter.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UserInvitationAccepter resources.
 */
export interface UserInvitationAccepterState {
    /**
     * ID of the invitation to accept
     */
    readonly invitationId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserInvitationAccepter resource.
 */
export interface UserInvitationAccepterArgs {
    /**
     * ID of the invitation to accept
     */
    readonly invitationId: pulumi.Input<string>;
}
