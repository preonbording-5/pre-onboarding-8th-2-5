import { IssueProps } from './../lib/type/IssueProps';

export const createIssue = (issueData: IssueProps) => {
  localStorage.setItem(issueData.id!.toString(), JSON.stringify(issueData));
};

export const getAllIssueData = () => {
  const issueLength = localStorage.length;
  const issueList = [];
  for (let i = 0; i < issueLength; i++) {
    issueList.push(JSON.parse(localStorage.getItem(localStorage.key(i)!) as string));
  }
  return issueList;
};

export const deleteIssue = (id: number) => {
  localStorage.removeItem(id.toString());
};

export const updateIssue = (issueData: IssueProps) => {
  localStorage.setItem(issueData.id!.toString(), JSON.stringify(issueData));
};
