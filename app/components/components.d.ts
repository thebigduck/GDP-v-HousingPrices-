import type { FC } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      Debt: FC;
      Houseprice: FC;
      Section: FC;
    }
  }
}