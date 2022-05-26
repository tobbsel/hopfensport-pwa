// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from '@octokit/request';
import { NextApiRequest, NextApiResponse } from 'next';
import { CreateIssueRequest } from '../../shared/CreateIssueRequest';

const createIssue = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const requestBody: CreateIssueRequest = JSON.parse(req.body)

        if (requestBody.description && requestBody.title) {
            await request('POST /repos/{owner}/{repo}/issues', {
                headers: {
                    authorization: `token ${process.env.GITHUB_ISSUES_AUTH_TOKEN}`,
                },
                owner: process.env.GITHUB_ISSUES_REPO_OWNER!,
                repo: process.env.GITHUB_ISSUES_REPO_NAME!,
                title: requestBody.title,
                body: requestBody.description + (requestBody.creator ? `\n\ncreated by "${requestBody.creator}"` : ''),
                labels: [requestBody.issueType]
            });
        } else {
            res.status(400).end('')
        }

        res.status(201).end('')
    } else {
        res.status(405).end('')
    }
}

export default createIssue
