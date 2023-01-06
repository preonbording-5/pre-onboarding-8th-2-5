import { IssueProps } from './../lib/type/IssueProps';
import { atom } from 'recoil';

export const issueData = atom<IssueProps[]>({
  key: 'issueData',
  default: [],
});
