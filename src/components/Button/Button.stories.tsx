import * as React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const defaultButton = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')}>Hello world</Button>
);
export const loadingButton = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')} loading>
    Hello world
  </Button>
);
export const disabledButton = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')} disabled>
    Hello world
  </Button>
);
