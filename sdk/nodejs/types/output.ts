// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../types/output";

export interface BranchProtectionRequiredPullRequestReviews {
    dismissStaleReviews?: boolean;
    dismissalTeams?: string[];
    dismissalUsers?: string[];
    includeAdmins?: boolean;
    requireCodeOwnerReviews?: boolean;
    requiredApprovingReviewCount?: number;
}

export interface BranchProtectionRequiredStatusChecks {
    contexts?: string[];
    includeAdmins?: boolean;
    strict?: boolean;
}

export interface BranchProtectionRestrictions {
    apps?: string[];
    teams?: string[];
    users?: string[];
}

export interface GetCollaboratorsCollaborator {
    /**
     * The GitHub API URL for the collaborator's events.
     */
    eventsUrl: string;
    /**
     * The GitHub API URL for the collaborator's followers.
     */
    followersUrl: string;
    /**
     * The GitHub API URL for those following the collaborator.
     */
    followingUrl: string;
    /**
     * The GitHub API URL for the collaborator's gists.
     */
    gistsUrl: string;
    /**
     * The GitHub HTML URL for the collaborator.
     */
    htmlUrl: string;
    /**
     * The ID of the collaborator.
     */
    id: number;
    /**
     * The collaborator's login.
     */
    login: string;
    /**
     * The GitHub API URL for the collaborator's organizations.
     */
    organizationsUrl: string;
    /**
     * The permission of the collaborator.
     */
    permission: string;
    /**
     * The GitHub API URL for the collaborator's received events.
     */
    receivedEventsUrl: string;
    /**
     * The GitHub API URL for the collaborator's repositories.
     */
    reposUrl: string;
    /**
     * Whether the user is a GitHub admin.
     */
    siteAdmin: boolean;
    /**
     * The GitHub API URL for the collaborator's starred repositories.
     */
    starredUrl: string;
    /**
     * The GitHub API URL for the collaborator's subscribed repositories.
     */
    subscriptionsUrl: string;
    /**
     * The type of the collaborator (ex. `user`).
     */
    type: string;
    /**
     * The GitHub API URL for the collaborator.
     */
    url: string;
}

export interface OrganizationWebhookConfiguration {
    contentType?: string;
    insecureSsl?: boolean;
    secret?: string;
    /**
     * URL of the webhook
     */
    url: string;
}

export interface RepositoryTemplate {
    owner: string;
    repository: string;
}

export interface RepositoryWebhookConfiguration {
    contentType?: string;
    insecureSsl?: boolean;
    secret?: string;
    /**
     * URL of the webhook
     */
    url: string;
}
