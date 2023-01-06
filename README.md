# 🚀 원티드 프리온보딩 프론트엔드 - 2주차 과제 Issue Tracking Tool

- 기간 : 2023. 01. 03 ~ 2023. 01. 06


## ✨ 실행 방법

```
npm install
npm start
```
 

## 📌 배포 링크
[링크](https://pre-onboarding-8th-2-5-h1sbdofh9-vanillovin.vercel.app/)


## 📁 src 폴더 구조

```
src
 ┣ api
 ┃ ┣ issueStateFilter.ts
 ┃ ┗ localStorage.ts
 ┣ lib
 ┃ ┣ dummyData
 ┃ ┃ ┗ managersData.ts
 ┃ ┗ type
 ┃ ┃ ┗ IssueProps.ts
 ┣ recoil
 ┃ ┗ atom.ts
 ┣ ui
 ┃ ┣ components
 ┃ ┃ ┣ IssueTracking
 ┃ ┃ ┃ ┣ IssueItem.tsx
 ┃ ┃ ┃ ┗ IssueModal.tsx
 ┃ ┃ ┗ layout
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┃ ┗ Page.tsx
 ┃ ┣ core
 ┃ ┃ ┗ GlobalStyles.ts
 ┃ ┗ pages
 ┃ ┃ ┗ IssueTrackingPage.tsx
 ┣ App.tsx
 ┗ index.tsx
```


## ✅ 요구 사항 & Best Practice

### 1. CRUD 구현

#### 이슈 목록 조회
- [ ] 이슈 목록에는 제목과 담당자가 노출됩니다.

```
```

#### 이슈 추가

- [ ] 각 상태별 리스트에서 새로운 이슈를 등록할 수 있습니다.
- [ ] 이슈에는 고유번호, 제목, 내용, 마감일, 상태, 담당자가 존재합니다.
- [ ] 작성 폼에서는 제목, 내용, 마감일, 상태, 담당자를 입력할 수 있습니다.
- [ ] 담당자의 경우 검색을 수행하면 검색결과 값이 노출되며 그 중 하나를 선택해서 담당자를 지정할 수 있습니다.
- [ ] 모든 입력창에 값을 입력하고, 담당자를 제대로 지정한 경우에만 등록버튼이 활성화 됩니다.

```
```

#### 이슈 상세 보기

- [ ] 이슈 목록에서 개별 이슈 클릭 시 상세 보기 모달이 오픈됩니다.

```
```

#### 이슈 정보 수정

- [ ] 상세 보기 모달에서 내용 수정이 가능합니다.
- [ ] 상세정보 창에서 이슈의 각 정보를 수정할 수 있으며, 저장버튼을 클릭 시 수정한 내용이 반영됩니다.

```
```


### 2. Drag & Drop

- [ ] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경할 수 있다. 변경된 순서는 고유번호순 정렬보다 우선해서 적용됩니다.
- [ ] 이슈 목록에서 마우스의 Drag & Drop 이벤트를 활용해 이슈의 상태를 변경할 수 있습니다.


### 3. 구현 조건

- [ ] 데이터가 로딩 중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려해야 하며, 로딩 중에는 액션이 발생하는 것을 방지해야 합니다.
- [ ] 각 기능들은 실수로 인한 중복 액션을 방지하기 위해 실행 후 0.5초의 딜레이를 적용합니다.
- [ ] 데이터는 새로고침해도 유지될 수 있도록 관리합니다.


### ✔️ commit msg

> 해당 프로젝트는 comitlint를 활용하여 다음과 같은 commit convention prefix를 가집니다.

| Prefix   | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)    |
| ci       | Changes to our CI configuration files and scripts                                                      |
| docs     | Documentation only changes                                                                             |
| feat     | A new feature                                                                                          |
| fix      | A bug fix                                                                                              |
| perf     | A code change that improves performance                                                                |
| refactor | A code change that neither fixes a bug nor adds a feature                                              |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test     | Adding missing tests or correcting existing tests                                                      |


## 💪 팀 소개

| 이름      | 개인 Repository 주소                      |
| --------- | ----------------------------------------- |
| 박인      | https://github.com/innie0526              |
| 오신정    | https://github.com/ShinjungOh             |
| 이민지    | https://github.com/vanillovin             |
| 이정우    | https://github.com/azerose                |
| 황성택    | https://github.com/Seongtaek-H            |

### 🛠 기술 스택 및 라이브러리
```
React, TypeScript, Recoil, styled-components, react-router-dom, ESLint, Prettier, Husky
```
