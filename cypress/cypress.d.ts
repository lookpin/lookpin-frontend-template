import { mount } from 'cypress/react';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      // 이곳에 cypress에서 사용할 커맨드를 추가하세요.
      // 추가한 타입은 cypress/support/commands.ts에서 구현하세요.
      dataCy: (value: string) => Chainable<JQuery<HTMLElement>>;
    }
  }
}
