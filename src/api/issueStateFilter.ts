import { IssueProps } from '../lib/type/IssueProps';

export const StateFilter = (issueList: IssueProps[], state?: string) => {
  if (state === '할 일') {
    return issueList.filter((item) => item.state === '할 일');
  } else if (state === '진행 중') {
    return issueList.filter((item) => item.state === '진행 중');
  } else {
    return issueList.filter((item) => item.state === '완료');
  }
};
