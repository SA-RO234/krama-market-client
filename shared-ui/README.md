Shared UI components

This folder contains small standalone Angular UI components intended to be shared
between the `merchant` and `super-admin` apps. Components are standalone so they
can be imported directly into other standalone components or feature modules.

Usage examples

- Import a standalone component into another component's `imports` array:

```ts
import { KrButton } from 'path/to/shared-ui/src/app/components/kr-button/kr-button';

@Component({
  standalone: true,
  imports: [KrButton],
  template: `<kr-button (click)="doSomething()">Click</kr-button>`
})
export class SomeComponent {}
```

Or import multiple components together:

```ts
import { KrButton } from './shared-ui/src/app/components/kr-button/kr-button';
import { KrCard } from './shared-ui/src/app/components/kr-card/kr-card';

@Component({
  standalone: true,
  imports: [KrButton, KrCard],
  template: `<kr-card title="Hello"><kr-button>OK</kr-button></kr-card>`
})
export class OtherComponent {}
```

Note: adjust relative import paths to match your workspace layout.
