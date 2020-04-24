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
    public sealed class BranchProtectionRestrictions
    {
        public readonly ImmutableArray<string> Apps;
        public readonly ImmutableArray<string> Teams;
        public readonly ImmutableArray<string> Users;

        [OutputConstructor]
        private BranchProtectionRestrictions(
            ImmutableArray<string> apps,

            ImmutableArray<string> teams,

            ImmutableArray<string> users)
        {
            Apps = apps;
            Teams = teams;
            Users = users;
        }
    }
}
