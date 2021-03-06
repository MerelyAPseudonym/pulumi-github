// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github
{
    public static class GetCollaborators
    {
        /// <summary>
        /// Use this data source to retrieve the collaborators for a given repository.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Github = Pulumi.Github;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var test = Output.Create(Github.GetCollaborators.InvokeAsync(new Github.GetCollaboratorsArgs
        ///         {
        ///             Owner = "example_owner",
        ///             Repository = "example_repository",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetCollaboratorsResult> InvokeAsync(GetCollaboratorsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCollaboratorsResult>("github:index/getCollaborators:getCollaborators", args ?? new GetCollaboratorsArgs(), options.WithVersion());
    }


    public sealed class GetCollaboratorsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Filter collaborators returned by their affiliation. Can be one of: `outside`, `direct`, `all`.  Defaults to `all`.
        /// </summary>
        [Input("affiliation")]
        public string? Affiliation { get; set; }

        /// <summary>
        /// The organization that owns the repository.
        /// </summary>
        [Input("owner", required: true)]
        public string Owner { get; set; } = null!;

        /// <summary>
        /// The name of the repository.
        /// </summary>
        [Input("repository", required: true)]
        public string Repository { get; set; } = null!;

        public GetCollaboratorsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCollaboratorsResult
    {
        public readonly string? Affiliation;
        /// <summary>
        /// An Array of GitHub collaborators.  Each `collaborator` block consists of the fields documented below.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetCollaboratorsCollaboratorResult> Collaborators;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Owner;
        public readonly string Repository;

        [OutputConstructor]
        private GetCollaboratorsResult(
            string? affiliation,

            ImmutableArray<Outputs.GetCollaboratorsCollaboratorResult> collaborators,

            string id,

            string owner,

            string repository)
        {
            Affiliation = affiliation;
            Collaborators = collaborators;
            Id = id;
            Owner = owner;
            Repository = repository;
        }
    }
}
