import { IssueProps } from './../lib/type/IssueProps';
import { atom } from 'recoil';

export const issueData = atom<IssueProps[]>({
  key: 'issueData',
  default: [],
});

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
});
