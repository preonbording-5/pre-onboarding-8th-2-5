# π μν°λ νλ¦¬μ¨λ³΄λ© νλ‘ νΈμλ - 2μ£Όμ°¨ κ³Όμ  Issue Tracking Tool

- κΈ°κ° : 2023. 01. 03 ~ 2023. 01. 06


## β¨ μ€ν λ°©λ²

```
npm install
npm start
```
 
<br/>

## π λ°°ν¬ λ§ν¬
[π μ΄μ νΈλνΉ λ°°ν¬ λ§ν¬](https://pre-onboarding-8th-2-5-h1sbdofh9-vanillovin.vercel.app/)

<br/>

## π src ν΄λ κ΅¬μ‘°

```
src
 β£ api
 β β£ issueStateFilter.ts
 β β localStorage.ts
 β£ lib
 β β£ dummyData
 β β β managersData.ts
 β β type
 β β β IssueProps.ts
 β£ recoil
 β β atom.ts
 β£ ui
 β β£ components
 β β β£ IssueTracking
 β β β β£ IssueItem.tsx
 β β β β IssueModal.tsx
 β β β layout
 β β β β£ index.ts
 β β β β£ Layout.tsx
 β β β β Page.tsx
 β β£ core
 β β β GlobalStyles.ts
 β β pages
 β β β IssueTrackingPage.tsx
 β£ App.tsx
 β index.tsx
```

<br/>

## β μκ΅¬ μ¬ν­ & Best Practice

### π€ κ³ λ―Όνλ λΆλΆ

* λΆνμν μ»΄ν¬λνΈμ λ¨λ°μ μ€μ΄κΈ° μν΄ μ΄μ λ±λ‘ λͺ¨λ¬μ μ¬νμ©ν΄ CREATE λͺ¨λμ EDIT λͺ¨λλ‘ κ΅¬ννμ΅λλ€. μ΄μ μμΈλ³΄κΈ° λͺ¨λ¬ μ°½μμ μλ ₯κ°μ μμ νκ³  μ μ₯ν  μ μλλ‘ κ΅¬ννμ΅λλ€.
* κ° μ΄μ μνλ³λ‘ μνκ΄λ¦¬λ₯Ό ν΄μ€ κ²μΈμ§, μλλ©΄ νλμ μνμλ€κ° λ°°μ΄λ‘ κ΄λ¦¬ν  κ²μΈμ§ κ³ λ―Όμ΄ λμμ΅λλ€.

<br/>

### 1. CRUD κ΅¬ν

#### μ΄μ λͺ©λ‘ μ‘°ν
- [x] μ΄μ λͺ©λ‘μλ μ λͺ©κ³Ό λ΄λΉμκ° λΈμΆλ©λλ€.

#### μ΄μ μΆκ°

- [x] κ° μνλ³ λ¦¬μ€νΈμμ μλ‘μ΄ μ΄μλ₯Ό λ±λ‘ν  μ μμ΅λλ€.
- [x] μ΄μμλ κ³ μ λ²νΈ, μ λͺ©, λ΄μ©, λ§κ°μΌ, μν, λ΄λΉμκ° μ‘΄μ¬ν©λλ€.
- [x] μμ± νΌμμλ μ λͺ©, λ΄μ©, λ§κ°μΌ, μν, λ΄λΉμλ₯Ό μλ ₯ν  μ μμ΅λλ€.
- [x] λ΄λΉμμ κ²½μ° κ²μμ μννλ©΄ κ²μκ²°κ³Ό κ°μ΄ λΈμΆλλ©° κ·Έ μ€ νλλ₯Ό μ νν΄μ λ΄λΉμλ₯Ό μ§μ ν  μ μμ΅λλ€.
- [x] λͺ¨λ  μλ ₯μ°½μ κ°μ μλ ₯νκ³ , λ΄λΉμλ₯Ό μ λλ‘ μ§μ ν κ²½μ°μλ§ λ±λ‘λ²νΌμ΄ νμ±ν λ©λλ€.

```tsx
// IssueModal.tsx
// κ²μ κΈ°λ₯ λ‘μ§
const handleChangeInput = (e: any) => {
    const { value, name } = e.target;
    if (value === '') {
      setIsOpenSearchList(false);
    }
    setUserInput({
      ...userInput,
      [name]: value,
    });

    if (name === 'manager') {
      const regexp = new RegExp(value, 'gi');
      const searchManager = managers.filter((manager) => manager.match(regexp));
      setSearchManagerList(searchManager);
      setIsOpenSearchList(true);
    }
  };

  const handleSearchInputClick = (searchInputText: string) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      manager: searchInputText,
    }));
    setIsOpenSearchList(false);
  };
```

#### μ΄μ μμΈ λ³΄κΈ°

- [x] μ΄μ λͺ©λ‘μμ κ°λ³ μ΄μ ν΄λ¦­ μ μμΈ λ³΄κΈ° λͺ¨λ¬μ΄ μ€νλ©λλ€.

#### μ΄μ μ λ³΄ μμ 

- [x] μμΈ λ³΄κΈ° λͺ¨λ¬μμ λ΄μ© μμ μ΄ κ°λ₯ν©λλ€.
- [x] μμΈμ λ³΄ μ°½μμ μ΄μμ κ° μ λ³΄λ₯Ό μμ ν  μ μμΌλ©°, μ μ₯λ²νΌμ ν΄λ¦­ μ μμ ν λ΄μ©μ΄ λ°μλ©λλ€.

<br/>

### 2. Drag & Drop

- [x] μ΄μ λͺ©λ‘μμ λ§μ°μ€μ Drag & Drop μ΄λ²€νΈλ₯Ό νμ©ν΄ μ΄μμ μνλ₯Ό λ³κ²½ν  μ μμ΅λλ€.
- [x] λ³κ²½λ μμλ κ³ μ λ²νΈμ μ λ ¬λ³΄λ€ μ°μ ν΄μ μ μ©λ©λλ€.

<br/>

### 3. κ΅¬ν μ‘°κ±΄

- [x] λ°μ΄ν°κ° λ‘λ© μ€μΈ κ²½μ° μ¬μ©μκ° μ΄λ₯Ό μΈμν  μ μλλ‘ UXλ₯Ό κ³ λ €ν΄μΌ νλ©°, λ‘λ© μ€μλ μ‘μμ΄ λ°μνλ κ²μ λ°©μ§ν΄μΌ ν©λλ€.
- [x] κ° κΈ°λ₯λ€μ μ€μλ‘ μΈν μ€λ³΅ μ‘μμ λ°©μ§νκΈ° μν΄ μ€ν ν 0.5μ΄μ λλ μ΄λ₯Ό μ μ©ν©λλ€.
- [x] λ°μ΄ν°λ μλ‘κ³ μΉ¨ν΄λ μ μ§λ  μ μλλ‘ κ΄λ¦¬ν©λλ€.

<br/>

### βοΈ commit msg

> ν΄λΉ νλ‘μ νΈλ comitlintλ₯Ό νμ©νμ¬ λ€μκ³Ό κ°μ commit convention prefixλ₯Ό κ°μ§λλ€.

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

<br/>

## πͺ ν μκ°

| μ΄λ¦      | κ°μΈ Repository μ£Όμ                      |
| --------- | ----------------------------------------- |
| λ°μΈ      | https://github.com/innie0526              |
| μ€μ μ     | https://github.com/ShinjungOh             |
| μ΄λ―Όμ§    | https://github.com/vanillovin             |
| μ΄μ μ°    | https://github.com/azerose                |
| ν©μ±ν    | https://github.com/Seongtaek-H            |

<br/>

### π  κΈ°μ  μ€ν λ° λΌμ΄λΈλ¬λ¦¬
```
React, TypeScript, Recoil, styled-components, react-router-dom, ESLint, Prettier
```
