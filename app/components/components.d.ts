import type { FC } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      Dsapp: FC;
    }
  }
}