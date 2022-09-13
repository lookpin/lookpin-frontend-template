# react-new-template 🚀

## 1. Outline 📄

### 1.1 Introduction

react-new-template(이하 템플릿)은 Lookpin(이하 사내)에서 사용 중인 아키텍처를 적용한 스타터 프로젝트입니다.

본 템플릿의 주요 모듈은 다음과 같으며 **프론트엔드 개발자 대상**입니다.

- React, Typescript, Vite
- Redux Toolkit
- Vitest, Storybook, Cypress
- jordy and jordy-cli

<br />

### 1.2 Concept

본 템플릿의 아키텍처는 MVVM과 Flux 아키텍처를 적절히 섞은 형태로 사내의 프론트엔드 팀 리더 [thesoncriel](https://github.com/thesoncriel)님께서 체계화 시켰습니다.

> 본 아키텍처의 설명을 원활하게 하고자 아키텍처의 명명은 이제부터 **룩핀 아키텍처**라 하겠습니다.

<br />

### 1.3 Folder Structure

폴더의 구조는 다음과 같습니다.

여기서 폴더란 `src`의 하위 폴더들을 의미하며 `public`, `cypress`, `.storybook`, 기타 config 설정 등에 대한 설명은 따로 하지 않습니다.

<br />

| 명칭     | 역할                                                    | 원칙                                                                                              |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| common   | 공통기능 모음                                           | 프로젝트 내 그 어떤 모듈도 import 불가 <br /> 스토어 및 자체 업무 구성 불가                       |
| core     | 네트워크, 엔티티 및 레포지토리 선언                     | 오직 common 모듈만 import 가능 <br /> 역할 외 다른 기능 제공 불가                                 |
| shared   | 다른 기능 모듈에서 공유되는 하위 기능 구현 및 공유      | common 과 core 모듈 요소만 import 가능 <br /> 페이지 및 라우트 구성 불가                          |
| features | 페이지나 라우트, 혹은 정의된 특정 구현이 담긴 기능 모듈 | common, core, shared 모듈 내 요소 import 가능 <br /> 그러나 다른 feature 모듈 내 요소는 접근 불가 |

<br />

위 설명을 따른 폴더 구조는 다음과 같습니다.

```
/src
├── common
├── core
├── shared
└── features
```

<br />

### 1.4 Directories

위 언급된 4가지 폴더들의 하위 폴더에 대한 상세 정의는 다음과 같습니다.

본 템플릿에 구현된 기능은 아주 심플한 예로 구현되지 않은 사항이 있어 **짚고 넘어가는 것을 추천**합니다.

하위 폴더에 대한 상세한 구조 내용은 [thesoncriel](https://github.com/thesoncriel)님이 작성하신 문서를 발췌합니다.

<br />

#### 하위 폴더 구조

아래는 `core` 를 제외한 모듈 내 포함될 수 있는 하위 폴더, 혹은 파일들 입니다.

| 명칭        | 역할                                      | 불가 여부   |
| ----------- | ----------------------------------------- | ----------- |
| components  | UI 컴포넌트 모음                          |             |
| containers  | 컨테이너 컴포넌트 모음                    | common 불가 |
| pages       | 페이지 컴포넌트 모음                      | shared 불가 |
| contexts    | 컨텍스트 모음                             |             |
| hooks       | 컴포넌트에서 쓰이는 훅스 모음             |             |
| hoc         | 컴포넌트에서 쓰이는 High Order Component  |             |
| constants   | 상수모음                                  |             |
| models      | UI 모델, 컴포넌트 전용 타입 모음          |             |
| manipulates | 데이터 조작기 모음                        |             |
| stores      | Redux Slice, Effect, Selector 등          | common 불가 |
| queries     | Query Hooks 혹은 Mutation Hooks 모음      | common 불가 |
| utils       | 부속 유틸리티 함수, 객체 혹은 클래스들    |             |
| services    | 서비스 객체 혹은 클래스                   |             |
| validates   | 유효성 검증기                             |             |
| reducers.ts | 현재 모듈에서 쓰이는 리듀서 모음          | common 불가 |
| routes.ts   | 현재 모듈에서 정의된 페이지와 라우트 설정 | shared 불가 |

> ℹ️
> 특정 내용이 shared 와 common 모듈에서 제외되는 이유
>
> 컨테이너와 스토어는 `하나의 완성된 업무를 구성하는 요소` 입니다.
> common 은 공통으로 쓰이는 부품들을 모아놓은 곳이므로 절대 하나의 완성된 업무를 구성할 수 없습니다.
> 만약 스토어와 컨테이너를 응용하되 여러곳에서 쓰여야 한다면, 이건 `shared` 에서 만들어 공유해야 합니다.
>
> 한편, 페이지를 만들고 그것의 라우트 설정을 하고자 한다면, 이 것은 shared 가 아닌 기능 모듈(feature module)에 정의하여 사용해야 합니다.
> 만약 페이지 자체가 동일한 패턴을 가지고 여러 모듈에서 쓰인다 하면, 그 내부의 Container 나 Store 요소들만 shared 에 남기고,
> 페이지 컴포넌트 및 라우트 설정은 모두 기능 모듈에 따로 정의하여 사용합니다.

상기 표의 구성 요소들은 가능한 한 선언된 부모 모듈 내에서만 사용되어야 합니다.

<!--
/src/features/{ohMyLookpin}

# components
## loves
### _stories
#### OhMyLookpinView.stories.tsx
### OhMyLookpinView.tsx
# containers
# pages
# contexts
# hooks
# hoc
# constants
# models
# manipulates
## ohMyLookpin.create.ts
## ohMyLookpin.convert.ts
# stores
## loves
### ohMyLookpinLoves.effect.ts
### ohMyLookpinLoves.slice.ts
### ohMyLookpinLoves.selector.ts
# queries
# utils
# services
# validates
# reducers.ts
# routes.ts
-->

기능 모듈 내 폴더 구성 예시

```
/src/features/ohMyLookpin
├── components
│   └── loves
│       ├── _stories
│       │   └── OhMyLookpinView.stories.tsx
│       └── OhMyLookpinView.tsx
├── containers
├── pages
├── contexts
├── hooks
├── hoc
├── constants
├── models
├── manipulates
│   ├── ohMyLookpin.create.ts
│   └── ohMyLookpin.convert.ts
├── stores
│   └── loves
│       ├── ohMyLookpinLoves.effect.ts
│       ├── ohMyLookpinLoves.slice.ts
│       └── ohMyLookpinLoves.selector.ts
├── queries
├── utils
├── services
├── validates
├── reducers.ts
└── routes.ts
```

#### shared 모듈 사용 제약

shared 모듈은 만들어진 기능을 공유하는 곳이므로 다른 곳에서 제한적으로 import 하여 응용 가능합니다.

기능 모듈에서 접근 가능한 하위 요소들은 다음과 같습니다.

- 언제나 가능 👍
  - container 나 redux store 구성요소 (selector, effect)
  - models
  - queries (query hooks, mutation hooks)
- 가능하지만 가급적 지양 🤔
  - manipulates
  - services
  - validates

아래는 하시면 안됩니다! 😱

- 불가
  - components
  - contexts
  - hooks
  - utils
  - 그 외 모든 것들

> ℹ️ 팁
>
> 만약 shared 내 component 나 util 과 같은 단일 요소가 공통으로 쓰인다면 이러한 요소들은 `common`으로 옮겨야 합니다.

<br />

보다 더 자세한 사항이 궁금하다면 룩핀의 [프론트 컨벤션 - 폴더구조](https://github.com/lookpin/frontend-conventions/blob/master/architecture/folder_structure.md)를 참고하세요.

<br />

### 1.5 Specializations

본 템플릿을 이용해 작업을 시작하려 한다면 몇 가지 설정을 한 뒤 시작해야 합니다.

#### package.json

- name 변경
- version 변경

#### index.html

- meta 태그의 적절한 수정

#### .env

- `.env` 파일에 대한 적절한 ignore 처리와 변수 할당

<br />

## 2. Installation 🧑‍💻

본 템플릿을 올바르게 사용하기 위해 **최소 Node 16 버전이 필요**하며 **LTS 혹은 그 이상의 버전 사용**을 권장합니다.

또한 패키지 관리자는 yarn이어도 무방하나, 최초 npm으로 설정되어 있어 **npm을 권장**합니다.

깃허브가 제공하는 `use this template`으로 레포지토리를 만들어 시작하거나 다음 명령어를 이용해 시작합니다.

```shell
git clone https://github.com/chkim116/react-new-template.git

cd react-new-template

npm install && npm run start
```

위 커맨드를 실행 시 자동으로 개발 모드로 동작하며 만약 개발 모드 or 프로덕션 모드를 명시적으로 실행시키고 싶다면 다음 커맨드를 입력합니다.

```shell
# 개발 모드 실행
## .env.development에 의존합니다.
npm run start:dev

# 프로덕션 모드 실행
## .env.production에 의존합니다.
npm run start:prod
```

빌드 역시 실행 커맨드와 일맥상통으로 동작하며 별도 설명은 생략합니다.

<br />

## 3. Development 🛠

개발을 본격적으로 시작하기 전, 본 템플릿이 올바르게 동작하는지 실험합니다.

```shell
npm install && npm run build && npm run start:prod
```

올바르게 실행되었다면 프로덕션 환경을 종료한 뒤 개발 서버를 실행, 테스트를 실행해 봅니다.

```shell
# 개발 모드 실행
## npm run start도 동일하게 개발모드가 실행 됩니다.
npm run start:dev

# 스토리북 실행
npm run sb

# vitest 실행
npm run test

# cypress 실행
## cypress는 개발 환경이 구동된 상태여야 합니다.
npm run cy
```

모든 동작이 원활하다면 본격적으로 개발을 시작합니다.

> 본 템플릿은 룩핀 아키텍처 기반 코드를 원활히 작성하기 위해 스니펫을 포함하고 있습니다. 개발을 용이하게 해주니 꼭 참고하세요.

<br />

### 3.1 Entity & Repository

룩핀 아키텍처에서 개발의 시작점은 `core` 모듈을 정의하는 것입니다.

`core` 모듈이란 request 설정을 위한 `network`와 실제 요청 수행을 하는 `repository`, 서버로부터 받는 응답 자료에 대한 `entity`를 설계하는 폴더입니다.

1. createHttpApi, createHttpHeaderProvider, tokenProvider를 이용한 network 정의
2. 서버 응답 자료 server entity 정의
3. API 요청 repository 정의

상기한 순서대로 작업을 진행하면 되며, 본 템플릿에서는 core 모듈이 간단하지만 **실 프로젝트에 사용 중인 형태**와 가깝게 구현되었으므로 이를 참고하면 됩니다.

> 만일, storage를 조작해야 할 경우 storages.ts 파일을 참고합니다.

<br />

### 3.2 UI Model & Convert

두번째 단계는 UI, 즉 **View에서 사용할 Model을 설정**하고 **UI Model -> Entity Convert 함수를 명명**합니다.

하지만 만약, Entity가 UI Model과 동일하다면 상기된 작업 없이 다음 단계를 진행해도 무방합니다.

1. UI Model 정의
2. Server Entity -> UI Model Convert 함수 정의

본 템플릿에서도 간단히 구현된 사항이니 참고하되 별도로 설명이 필요하다면 다음을 읽어주세요.

다음과 같은 Server Entity가 있습니다.

```ts
interface RootMainImageEntity {
  image: string;
  category_id: string;
}
```

해당 인터페이스를 보면 알 수 있듯 서버의 Entity는 snake_case로 작성되어 있습니다. 반면 자바스크립트의 컨벤션은 camelCase입니다. 우리의 UI는 타입스크립트로 작성됐으며 자연스레 camelCase를 따릅니다.

사내에서는 Entity의 정의를 UI에서 사용하기 부적합하다 판단되면 UI에서 사용할 Model을 선언한 뒤 Entity -> Model Convert 함수를 정의합니다.

```ts
// UI에서 사용할 Model
// 위치 features/root/models/rootMain.model.ts
interface RootMainImageModel {
  image: string;
  categoryId: string;
}
```

이제 Entity를 Model로 변경할 수 있는 헬퍼 함수를 정의 합니다. 현재 사내에서는 이러한 헬퍼 함수를 **convert 함수**라 정의합니다.

```ts
// Server Entity -> UI Model 컨버터
// 위치 features/root/manipulates/rootMain.convert.ts
function toRootMainImageModel(entity: RootMainImageEntity): RootMainImageModel {
  return {
    image: entity.image,
    categoryId: entity.category_id,
  };
}
```

UI Model에서 서버로 요청을 보낼 시에도 인터페이스가 상이하다면 convert 함수를 정의하여 사용하도록 합니다. 매커니즘은 동일하므로 설명은 생략합니다.

> 위 예제는 지면 관계상, 단순히 표기법 변경만을 언급했습니다.
> 다만, 실제 업무에서는 때에 따라 복잡한 스키마를 사용하며, UI를 위해 단순화 시켜줄 필요가 있습니다.
> convert 함수는 이렇게 UI를 위한 자료로 변환 하기 위한 용도입니다.

<br />

### 3.3 Slice & Effect & Selector

세번째 단계는 Redux를 정의하는 단계입니다. 룩핀 아키텍처에서 redux는 view와 repository 사이의 layer로 존재합니다.

사내에서 redux의 modules은 3가지 부분으로 나눕니다.

1. Effect (async thunk)
2. Slice (createSlice)
3. Selector

위 순서대로 작업을 진행하되, 적절히 동시 다발적으로 진행하면 됩니다.

본 템플릿의 [`src/features/root/main/*`](https://github.com/chkim116/react-new-template/tree/main/src/features/root/stores/main) 리덕스 파일을 참고하면 flow를 금방 따라갈 수 있습니다.

<br />

### 3.4 View

네번째 단계는 지금껏 선언한 인터페이스와 함수를 조립하는 시간으로 가장 재미있는 순간입니다. View를 제작합니다.

룩핀 아키텍처에서 View는 서버와 통신이 필요할 때면 dispatch로 Redux에 요청하고, Redux의 store에게 응답을 받으며 `repository` or `network`에 직접적으로 접촉하지 않습니다.

View를 제작하는 흐름은 `page`->`containers`->`components`이며 각각의 정의는 다음과 같습니다.

> 여기서는 View의 제작 흐름을 탑-다운으로 이야기하였으나 바텀-업 방식의 설계도 좋은 선택입니다.

| 명칭       | 정의                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- |
| page       | 해당 features의 Route Entry Point입니다.                                               |
| containers | 기능적으로 완전한 컴포넌트입니다. 때로는 route 내 전역 상태를 건네받기도 합니다.       |
| components | View입니다. Containers의 자식으로 Props에 의해 상호 작용하는 **Dump Component**입니다. |

> 여기서 주의할 점은 `components`는 과거 Class 문법에서 불리던 **Pure Component**를 지칭하는 것은 아닙니다. components 역시 필요하다면 상태를 가질 수 있습니다.

사내에서는 [프론트 컨벤션](https://github.com/lookpin/frontend-conventions)을 문서화하여 지키고 있으며, 컴포넌트를 제작하는 자세한 방식은 프론트 컨벤션 문서를 참고하도록 합니다.

View 제작 역시 [`src/featrues/root/page`](https://github.com/chkim116/react-new-template/blob/main/src/features/root/pages/RootPage.tsx)를 확인하면 금방 이해할 수 있습니다.

<br />

### 3.5 Test

개발의 마지막 단계는 테스트입니다. 사내에서는 3가지 테스트 라이브러리를 도입해 사용 중입니다. 목록은 Cypress, Storybook, Vitest입니다.

1. `components/`의 하위에 제작된 컴포넌트 스토리북 제작
2. 이외 개발자 재량에 따르나 권장함.

테스트는 Storybook을 제외, 개발자의 판단에 따라 시행하도록 위임하고 있습니다. 그러나 상황이 급박하지 않다면 가급적 권장합니다.

다음 명령어를 실행하면 함께 설치된 vitest를 통해 개발 중 테스트 내용을 확인할 수 있습니다.

```shell
npm run test:watch
```

<br />

## 4. Appendix 📝

### jordy-\*

[thesoncriel](https://github.com/thesoncriel/)님이 제작하신 jordy과 jordy-cli 라이브러리는 룩핀 아키텍처 구성에 필요한 라이브러리입니다. 아직 문서화가 진행되지는 않았으나 레포지토리 주소를 올려 놓으니 작업에 참고바랍니다.

- [jordy](https://github.com/thesoncriel/jordy)
- [jordy-cli](https://github.com/thesoncriel/jordy-cli)
