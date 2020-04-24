// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github.Outputs
{

    [OutputType]
    public sealed class BranchProtectionRequiredPullRequestReviews
    {
        public readonly bool? DismissStaleReviews;
        public readonly ImmutableArray<string> DismissalTeams;
        public readonly ImmutableArray<string> DismissalUsers;
        public readonly bool? IncludeAdmins;
        public readonly bool? RequireCodeOwnerReviews;
        public readonly int? RequiredApprovingReviewCount;

        [OutputConstructor]
        private BranchProtectionRequiredPullRequestReviews(
            bool? dismissStaleReviews,

            ImmutableArray<string> dismissalTeams,

            ImmutableArray<string> dismissalUsers,

            bool? includeAdmins,

            bool? requireCodeOwnerReviews,

            int? requiredApprovingReviewCount)
        {
            DismissStaleReviews = dismissStaleReviews;
            DismissalTeams = dismissalTeams;
            DismissalUsers = dismissalUsers;
            IncludeAdmins = includeAdmins;
            RequireCodeOwnerReviews = requireCodeOwnerReviews;
            RequiredApprovingReviewCount = requiredApprovingReviewCount;
        }
    }
}
