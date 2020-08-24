# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from . import _utilities, _tables

__all__ = [
    'GetMembershipResult',
    'AwaitableGetMembershipResult',
    'get_membership',
]

@pulumi.output_type
class GetMembershipResult:
    """
    A collection of values returned by getMembership.
    """
    def __init__(__self__, etag=None, id=None, role=None, username=None):
        if etag and not isinstance(etag, str):
            raise TypeError("Expected argument 'etag' to be a str")
        pulumi.set(__self__, "etag", etag)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if role and not isinstance(role, str):
            raise TypeError("Expected argument 'role' to be a str")
        pulumi.set(__self__, "role", role)
        if username and not isinstance(username, str):
            raise TypeError("Expected argument 'username' to be a str")
        pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter
    def etag(self) -> str:
        """
        An etag representing the membership object.
        """
        return pulumi.get(self, "etag")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def role(self) -> str:
        """
        `admin` or `member` -- the role the user has within the organization.
        """
        return pulumi.get(self, "role")

    @property
    @pulumi.getter
    def username(self) -> str:
        """
        The username.
        """
        return pulumi.get(self, "username")


class AwaitableGetMembershipResult(GetMembershipResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetMembershipResult(
            etag=self.etag,
            id=self.id,
            role=self.role,
            username=self.username)


def get_membership(username: Optional[str] = None,
                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetMembershipResult:
    """
    Use this data source to find out if a user is a member of your organization, as well
    as what role they have within it.
    If the user's membership in the organization is pending their acceptance of an invite,
    the role they would have once they accept will be returned.

    ## Example Usage

    ```python
    import pulumi
    import pulumi_github as github

    membership_for_some_user = github.get_membership(username="SomeUser")
    ```


    :param str username: The username to lookup in the organization.
    """
    __args__ = dict()
    __args__['username'] = username
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('github:index/getMembership:getMembership', __args__, opts=opts, typ=GetMembershipResult).value

    return AwaitableGetMembershipResult(
        etag=__ret__.etag,
        id=__ret__.id,
        role=__ret__.role,
        username=__ret__.username)
