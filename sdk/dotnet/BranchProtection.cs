// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github
{
    /// <summary>
    /// Protects a GitHub branch.
    /// 
    /// This resource allows you to configure branch protection for repositories in your organization. When applied, the branch will be protected from forced pushes and deletion. Additional constraints, such as required status checks or restrictions on users, teams, and apps, can also be configured.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Github = Pulumi.Github;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var exampleTeam = new Github.Team("exampleTeam", new Github.TeamArgs
    ///         {
    ///         });
    ///         // Protect the master branch of the foo repository. Additionally, require that
    ///         // the "ci/travis" context to be passing and only allow the engineers team merge
    ///         // to the branch.
    ///         var exampleBranchProtection = new Github.BranchProtection("exampleBranchProtection", new Github.BranchProtectionArgs
    ///         {
    ///             Branch = "master",
    ///             EnforceAdmins = true,
    ///             Repository = github_repository.Example.Name,
    ///             RequiredPullRequestReviews = new Github.Inputs.BranchProtectionRequiredPullRequestReviewsArgs
    ///             {
    ///                 DismissStaleReviews = true,
    ///                 DismissalTeams = 
    ///                 {
    ///                     exampleTeam.Slug,
    ///                     github_team.Second.Slug,
    ///                 },
    ///                 DismissalUsers = 
    ///                 {
    ///                     "foo-user",
    ///                 },
    ///             },
    ///             RequiredStatusChecks = new Github.Inputs.BranchProtectionRequiredStatusChecksArgs
    ///             {
    ///                 Contexts = 
    ///                 {
    ///                     "ci/travis",
    ///                 },
    ///                 Strict = false,
    ///             },
    ///             Restrictions = new Github.Inputs.BranchProtectionRestrictionsArgs
    ///             {
    ///                 Apps = 
    ///                 {
    ///                     "foo-app",
    ///                 },
    ///                 Teams = 
    ///                 {
    ///                     exampleTeam.Slug,
    ///                 },
    ///                 Users = 
    ///                 {
    ///                     "foo-user",
    ///                 },
    ///             },
    ///         });
    ///         var exampleTeamRepository = new Github.TeamRepository("exampleTeamRepository", new Github.TeamRepositoryArgs
    ///         {
    ///             Permission = "pull",
    ///             Repository = github_repository.Example.Name,
    ///             TeamId = exampleTeam.Id,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class BranchProtection : Pulumi.CustomResource
    {
        /// <summary>
        /// The Git branch to protect.
        /// </summary>
        [Output("branch")]
        public Output<string> Branch { get; private set; } = null!;

        /// <summary>
        /// Boolean, setting this to `true` enforces status checks for repository administrators.
        /// </summary>
        [Output("enforceAdmins")]
        public Output<bool?> EnforceAdmins { get; private set; } = null!;

        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The GitHub repository name.
        /// </summary>
        [Output("repository")]
        public Output<string> Repository { get; private set; } = null!;

        /// <summary>
        /// Boolean, setting this to `true` requires all commits to be signed with GPG.
        /// </summary>
        [Output("requireSignedCommits")]
        public Output<bool?> RequireSignedCommits { get; private set; } = null!;

        /// <summary>
        /// Enforce restrictions for pull request reviews. See Required Pull Request Reviews below for details.
        /// </summary>
        [Output("requiredPullRequestReviews")]
        public Output<Outputs.BranchProtectionRequiredPullRequestReviews?> RequiredPullRequestReviews { get; private set; } = null!;

        /// <summary>
        /// Enforce restrictions for required status checks. See Required Status Checks below for details.
        /// </summary>
        [Output("requiredStatusChecks")]
        public Output<Outputs.BranchProtectionRequiredStatusChecks?> RequiredStatusChecks { get; private set; } = null!;

        /// <summary>
        /// Enforce restrictions for the users and teams that may push to the branch. See Restrictions below for details.
        /// </summary>
        [Output("restrictions")]
        public Output<Outputs.BranchProtectionRestrictions?> Restrictions { get; private set; } = null!;


        /// <summary>
        /// Create a BranchProtection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BranchProtection(string name, BranchProtectionArgs args, CustomResourceOptions? options = null)
            : base("github:index/branchProtection:BranchProtection", name, args ?? new BranchProtectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BranchProtection(string name, Input<string> id, BranchProtectionState? state = null, CustomResourceOptions? options = null)
            : base("github:index/branchProtection:BranchProtection", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BranchProtection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BranchProtection Get(string name, Input<string> id, BranchProtectionState? state = null, CustomResourceOptions? options = null)
        {
            return new BranchProtection(name, id, state, options);
        }
    }

    public sealed class BranchProtectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Git branch to protect.
        /// </summary>
        [Input("branch", required: true)]
        public Input<string> Branch { get; set; } = null!;

        /// <summary>
        /// Boolean, setting this to `true` enforces status checks for repository administrators.
        /// </summary>
        [Input("enforceAdmins")]
        public Input<bool>? EnforceAdmins { get; set; }

        /// <summary>
        /// The GitHub repository name.
        /// </summary>
        [Input("repository", required: true)]
        public Input<string> Repository { get; set; } = null!;

        /// <summary>
        /// Boolean, setting this to `true` requires all commits to be signed with GPG.
        /// </summary>
        [Input("requireSignedCommits")]
        public Input<bool>? RequireSignedCommits { get; set; }

        /// <summary>
        /// Enforce restrictions for pull request reviews. See Required Pull Request Reviews below for details.
        /// </summary>
        [Input("requiredPullRequestReviews")]
        public Input<Inputs.BranchProtectionRequiredPullRequestReviewsArgs>? RequiredPullRequestReviews { get; set; }

        /// <summary>
        /// Enforce restrictions for required status checks. See Required Status Checks below for details.
        /// </summary>
        [Input("requiredStatusChecks")]
        public Input<Inputs.BranchProtectionRequiredStatusChecksArgs>? RequiredStatusChecks { get; set; }

        /// <summary>
        /// Enforce restrictions for the users and teams that may push to the branch. See Restrictions below for details.
        /// </summary>
        [Input("restrictions")]
        public Input<Inputs.BranchProtectionRestrictionsArgs>? Restrictions { get; set; }

        public BranchProtectionArgs()
        {
        }
    }

    public sealed class BranchProtectionState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Git branch to protect.
        /// </summary>
        [Input("branch")]
        public Input<string>? Branch { get; set; }

        /// <summary>
        /// Boolean, setting this to `true` enforces status checks for repository administrators.
        /// </summary>
        [Input("enforceAdmins")]
        public Input<bool>? EnforceAdmins { get; set; }

        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The GitHub repository name.
        /// </summary>
        [Input("repository")]
        public Input<string>? Repository { get; set; }

        /// <summary>
        /// Boolean, setting this to `true` requires all commits to be signed with GPG.
        /// </summary>
        [Input("requireSignedCommits")]
        public Input<bool>? RequireSignedCommits { get; set; }

        /// <summary>
        /// Enforce restrictions for pull request reviews. See Required Pull Request Reviews below for details.
        /// </summary>
        [Input("requiredPullRequestReviews")]
        public Input<Inputs.BranchProtectionRequiredPullRequestReviewsGetArgs>? RequiredPullRequestReviews { get; set; }

        /// <summary>
        /// Enforce restrictions for required status checks. See Required Status Checks below for details.
        /// </summary>
        [Input("requiredStatusChecks")]
        public Input<Inputs.BranchProtectionRequiredStatusChecksGetArgs>? RequiredStatusChecks { get; set; }

        /// <summary>
        /// Enforce restrictions for the users and teams that may push to the branch. See Restrictions below for details.
        /// </summary>
        [Input("restrictions")]
        public Input<Inputs.BranchProtectionRestrictionsGetArgs>? Restrictions { get; set; }

        public BranchProtectionState()
        {
        }
    }
}
