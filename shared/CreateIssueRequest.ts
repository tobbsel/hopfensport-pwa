export type IssueType = 'bug' | 'feature request' | 'improvement'

export interface CreateIssueRequest {
    issueType: IssueType,
    title: string,
    description: string,
    creator: string
}
