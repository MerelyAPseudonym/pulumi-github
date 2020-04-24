// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github
{
    public static class GetTeam
    {
        /// <summary>
        /// Use this data source to retrieve information about a GitHub team.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetTeamResult> InvokeAsync(GetTeamArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTeamResult>("github:index/getTeam:getTeam", args ?? new GetTeamArgs(), options.WithVersion());
    }


    public sealed class GetTeamArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The team slug.
        /// </summary>
        [Input("slug", required: true)]
        public string Slug { get; set; } = null!;

        public GetTeamArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTeamResult
    {
        /// <summary>
        /// the team's description.
        /// </summary>
        public readonly string Description;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// List of team members
        /// </summary>
        public readonly ImmutableArray<string> Members;
        /// <summary>
        /// the team's full name.
        /// </summary>
        public readonly string Name;
        public readonly string NodeId;
        /// <summary>
        /// the team's permission level.
        /// </summary>
        public readonly string Permission;
        /// <summary>
        /// the team's privacy type.
        /// </summary>
        public readonly string Privacy;
        public readonly string Slug;

        [OutputConstructor]
        private GetTeamResult(
            string description,

            string id,

            ImmutableArray<string> members,

            string name,

            string nodeId,

            string permission,

            string privacy,

            string slug)
        {
            Description = description;
            Id = id;
            Members = members;
            Name = name;
            NodeId = nodeId;
            Permission = permission;
            Privacy = privacy;
            Slug = slug;
        }
    }
}
