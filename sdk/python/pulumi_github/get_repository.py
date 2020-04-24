# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetRepositoryResult:
    """
    A collection of values returned by getRepository.
    """
    def __init__(__self__, allow_merge_commit=None, allow_rebase_merge=None, allow_squash_merge=None, archived=None, default_branch=None, description=None, full_name=None, git_clone_url=None, has_downloads=None, has_issues=None, has_projects=None, has_wiki=None, homepage_url=None, html_url=None, http_clone_url=None, id=None, name=None, node_id=None, private=None, ssh_clone_url=None, svn_url=None, topics=None):
        if allow_merge_commit and not isinstance(allow_merge_commit, bool):
            raise TypeError("Expected argument 'allow_merge_commit' to be a bool")
        __self__.allow_merge_commit = allow_merge_commit
        """
        Whether the repository allows merge commits.
        """
        if allow_rebase_merge and not isinstance(allow_rebase_merge, bool):
            raise TypeError("Expected argument 'allow_rebase_merge' to be a bool")
        __self__.allow_rebase_merge = allow_rebase_merge
        """
        Whether the repository allows rebase merges.
        """
        if allow_squash_merge and not isinstance(allow_squash_merge, bool):
            raise TypeError("Expected argument 'allow_squash_merge' to be a bool")
        __self__.allow_squash_merge = allow_squash_merge
        """
        Whether the repository allows squash merges.
        """
        if archived and not isinstance(archived, bool):
            raise TypeError("Expected argument 'archived' to be a bool")
        __self__.archived = archived
        """
        Whether the repository is archived.
        """
        if default_branch and not isinstance(default_branch, str):
            raise TypeError("Expected argument 'default_branch' to be a str")
        __self__.default_branch = default_branch
        """
        The name of the default branch of the repository.
        """
        if description and not isinstance(description, str):
            raise TypeError("Expected argument 'description' to be a str")
        __self__.description = description
        """
        A description of the repository.
        """
        if full_name and not isinstance(full_name, str):
            raise TypeError("Expected argument 'full_name' to be a str")
        __self__.full_name = full_name
        if git_clone_url and not isinstance(git_clone_url, str):
            raise TypeError("Expected argument 'git_clone_url' to be a str")
        __self__.git_clone_url = git_clone_url
        """
        URL that can be provided to `git clone` to clone the repository anonymously via the git protocol.
        """
        if has_downloads and not isinstance(has_downloads, bool):
            raise TypeError("Expected argument 'has_downloads' to be a bool")
        __self__.has_downloads = has_downloads
        """
        Whether the repository has Downloads feature enabled.
        """
        if has_issues and not isinstance(has_issues, bool):
            raise TypeError("Expected argument 'has_issues' to be a bool")
        __self__.has_issues = has_issues
        """
        Whether the repository has GitHub Issues enabled.
        """
        if has_projects and not isinstance(has_projects, bool):
            raise TypeError("Expected argument 'has_projects' to be a bool")
        __self__.has_projects = has_projects
        """
        Whether the repository has the GitHub Projects enabled.
        """
        if has_wiki and not isinstance(has_wiki, bool):
            raise TypeError("Expected argument 'has_wiki' to be a bool")
        __self__.has_wiki = has_wiki
        """
        Whether the repository has the GitHub Wiki enabled.
        """
        if homepage_url and not isinstance(homepage_url, str):
            raise TypeError("Expected argument 'homepage_url' to be a str")
        __self__.homepage_url = homepage_url
        """
        URL of a page describing the project.
        """
        if html_url and not isinstance(html_url, str):
            raise TypeError("Expected argument 'html_url' to be a str")
        __self__.html_url = html_url
        """
        URL to the repository on the web.
        """
        if http_clone_url and not isinstance(http_clone_url, str):
            raise TypeError("Expected argument 'http_clone_url' to be a str")
        __self__.http_clone_url = http_clone_url
        """
        URL that can be provided to `git clone` to clone the repository via HTTPS.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if node_id and not isinstance(node_id, str):
            raise TypeError("Expected argument 'node_id' to be a str")
        __self__.node_id = node_id
        if private and not isinstance(private, bool):
            raise TypeError("Expected argument 'private' to be a bool")
        __self__.private = private
        """
        Whether the repository is private.
        """
        if ssh_clone_url and not isinstance(ssh_clone_url, str):
            raise TypeError("Expected argument 'ssh_clone_url' to be a str")
        __self__.ssh_clone_url = ssh_clone_url
        """
        URL that can be provided to `git clone` to clone the repository via SSH.
        """
        if svn_url and not isinstance(svn_url, str):
            raise TypeError("Expected argument 'svn_url' to be a str")
        __self__.svn_url = svn_url
        """
        URL that can be provided to `svn checkout` to check out the repository via GitHub's Subversion protocol emulation.
        """
        if topics and not isinstance(topics, list):
            raise TypeError("Expected argument 'topics' to be a list")
        __self__.topics = topics
        """
        The list of topics of the repository.
        """
class AwaitableGetRepositoryResult(GetRepositoryResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRepositoryResult(
            allow_merge_commit=self.allow_merge_commit,
            allow_rebase_merge=self.allow_rebase_merge,
            allow_squash_merge=self.allow_squash_merge,
            archived=self.archived,
            default_branch=self.default_branch,
            description=self.description,
            full_name=self.full_name,
            git_clone_url=self.git_clone_url,
            has_downloads=self.has_downloads,
            has_issues=self.has_issues,
            has_projects=self.has_projects,
            has_wiki=self.has_wiki,
            homepage_url=self.homepage_url,
            html_url=self.html_url,
            http_clone_url=self.http_clone_url,
            id=self.id,
            name=self.name,
            node_id=self.node_id,
            private=self.private,
            ssh_clone_url=self.ssh_clone_url,
            svn_url=self.svn_url,
            topics=self.topics)

def get_repository(full_name=None,name=None,opts=None):
    """
    Use this data source to retrieve information about a GitHub repository.




    :param str full_name: Full name of the repository (in `org/name` format).
    :param str name: The name of the repository.
    """
    __args__ = dict()


    __args__['fullName'] = full_name
    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('github:index/getRepository:getRepository', __args__, opts=opts).value

    return AwaitableGetRepositoryResult(
        allow_merge_commit=__ret__.get('allowMergeCommit'),
        allow_rebase_merge=__ret__.get('allowRebaseMerge'),
        allow_squash_merge=__ret__.get('allowSquashMerge'),
        archived=__ret__.get('archived'),
        default_branch=__ret__.get('defaultBranch'),
        description=__ret__.get('description'),
        full_name=__ret__.get('fullName'),
        git_clone_url=__ret__.get('gitCloneUrl'),
        has_downloads=__ret__.get('hasDownloads'),
        has_issues=__ret__.get('hasIssues'),
        has_projects=__ret__.get('hasProjects'),
        has_wiki=__ret__.get('hasWiki'),
        homepage_url=__ret__.get('homepageUrl'),
        html_url=__ret__.get('htmlUrl'),
        http_clone_url=__ret__.get('httpCloneUrl'),
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        node_id=__ret__.get('nodeId'),
        private=__ret__.get('private'),
        ssh_clone_url=__ret__.get('sshCloneUrl'),
        svn_url=__ret__.get('svnUrl'),
        topics=__ret__.get('topics'))
