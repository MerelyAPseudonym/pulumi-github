# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from . import _utilities, _tables

__all__ = ['RepositoryDeployKey']


class RepositoryDeployKey(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 key: Optional[pulumi.Input[str]] = None,
                 read_only: Optional[pulumi.Input[bool]] = None,
                 repository: Optional[pulumi.Input[str]] = None,
                 title: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a GitHub repository deploy key resource.

        A deploy key is an SSH key that is stored on your server and grants
        access to a single GitHub repository. This key is attached directly to the repository instead of to a personal user
        account.

        This resource allows you to add/remove repository deploy keys.

        Further documentation on GitHub repository deploy keys:
        - [About deploy keys](https://developer.github.com/guides/managing-deploy-keys/#deploy-keys)

        ## Example Usage

        ```python
        import pulumi
        import pulumi_github as github

        # Add a deploy key
        example_repository_deploy_key = github.RepositoryDeployKey("exampleRepositoryDeployKey",
            key="ssh-rsa AAA...",
            read_only=False,
            repository="test-repo",
            title="Repository test key")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] key: A SSH key.
        :param pulumi.Input[bool] read_only: A boolean qualifying the key to be either read only or read/write.
        :param pulumi.Input[str] repository: Name of the GitHub repository.
        :param pulumi.Input[str] title: A title.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if key is None:
                raise TypeError("Missing required property 'key'")
            __props__['key'] = key
            __props__['read_only'] = read_only
            if repository is None:
                raise TypeError("Missing required property 'repository'")
            __props__['repository'] = repository
            if title is None:
                raise TypeError("Missing required property 'title'")
            __props__['title'] = title
            __props__['etag'] = None
        super(RepositoryDeployKey, __self__).__init__(
            'github:index/repositoryDeployKey:RepositoryDeployKey',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            etag: Optional[pulumi.Input[str]] = None,
            key: Optional[pulumi.Input[str]] = None,
            read_only: Optional[pulumi.Input[bool]] = None,
            repository: Optional[pulumi.Input[str]] = None,
            title: Optional[pulumi.Input[str]] = None) -> 'RepositoryDeployKey':
        """
        Get an existing RepositoryDeployKey resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] key: A SSH key.
        :param pulumi.Input[bool] read_only: A boolean qualifying the key to be either read only or read/write.
        :param pulumi.Input[str] repository: Name of the GitHub repository.
        :param pulumi.Input[str] title: A title.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["etag"] = etag
        __props__["key"] = key
        __props__["read_only"] = read_only
        __props__["repository"] = repository
        __props__["title"] = title
        return RepositoryDeployKey(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def etag(self) -> str:
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def key(self) -> str:
        """
        A SSH key.
        """
        return pulumi.get(self, "key")

    @property
    @pulumi.getter(name="readOnly")
    def read_only(self) -> Optional[bool]:
        """
        A boolean qualifying the key to be either read only or read/write.
        """
        return pulumi.get(self, "read_only")

    @property
    @pulumi.getter
    def repository(self) -> str:
        """
        Name of the GitHub repository.
        """
        return pulumi.get(self, "repository")

    @property
    @pulumi.getter
    def title(self) -> str:
        """
        A title.
        """
        return pulumi.get(self, "title")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

