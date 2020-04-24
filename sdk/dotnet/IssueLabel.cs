// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Github
{
    public partial class IssueLabel : Pulumi.CustomResource
    {
        /// <summary>
        /// A 6 character hex code, **without the leading #**, identifying the color of the label.
        /// </summary>
        [Output("color")]
        public Output<string> Color { get; private set; } = null!;

        /// <summary>
        /// A short description of the label.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The name of the label.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The GitHub repository
        /// </summary>
        [Output("repository")]
        public Output<string> Repository { get; private set; } = null!;

        /// <summary>
        /// The URL to the issue label
        /// </summary>
        [Output("url")]
        public Output<string> Url { get; private set; } = null!;


        /// <summary>
        /// Create a IssueLabel resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public IssueLabel(string name, IssueLabelArgs args, CustomResourceOptions? options = null)
            : base("github:index/issueLabel:IssueLabel", name, args ?? new IssueLabelArgs(), MakeResourceOptions(options, ""))
        {
        }

        private IssueLabel(string name, Input<string> id, IssueLabelState? state = null, CustomResourceOptions? options = null)
            : base("github:index/issueLabel:IssueLabel", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing IssueLabel resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static IssueLabel Get(string name, Input<string> id, IssueLabelState? state = null, CustomResourceOptions? options = null)
        {
            return new IssueLabel(name, id, state, options);
        }
    }

    public sealed class IssueLabelArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A 6 character hex code, **without the leading #**, identifying the color of the label.
        /// </summary>
        [Input("color", required: true)]
        public Input<string> Color { get; set; } = null!;

        /// <summary>
        /// A short description of the label.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The name of the label.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The GitHub repository
        /// </summary>
        [Input("repository", required: true)]
        public Input<string> Repository { get; set; } = null!;

        public IssueLabelArgs()
        {
        }
    }

    public sealed class IssueLabelState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A 6 character hex code, **without the leading #**, identifying the color of the label.
        /// </summary>
        [Input("color")]
        public Input<string>? Color { get; set; }

        /// <summary>
        /// A short description of the label.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The name of the label.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The GitHub repository
        /// </summary>
        [Input("repository")]
        public Input<string>? Repository { get; set; }

        /// <summary>
        /// The URL to the issue label
        /// </summary>
        [Input("url")]
        public Input<string>? Url { get; set; }

        public IssueLabelState()
        {
        }
    }
}
