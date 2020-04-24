// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github
{
    public static class GetMembership
    {
        /// <summary>
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetMembershipResult> InvokeAsync(GetMembershipArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetMembershipResult>("github:index/getMembership:getMembership", args ?? new GetMembershipArgs(), options.WithVersion());
    }


    public sealed class GetMembershipArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The username to lookup in the organization.
        /// </summary>
        [Input("username", required: true)]
        public string Username { get; set; } = null!;

        public GetMembershipArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetMembershipResult
    {
        /// <summary>
        /// An etag representing the membership object.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// `admin` or `member` -- the role the user has within the organization.
        /// </summary>
        public readonly string Role;
        /// <summary>
        /// The username.
        /// </summary>
        public readonly string Username;

        [OutputConstructor]
        private GetMembershipResult(
            string etag,

            string id,

            string role,

            string username)
        {
            Etag = etag;
            Id = id;
            Role = role;
            Username = username;
        }
    }
}
