export interface CreateIssueRequest {
    issueType: 'bug' | 'feature request',
    title: string,
    description: string,
    creator: string
}
