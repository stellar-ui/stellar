import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const Default = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')}>Hello world</Button>
);

export const Loading = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')} loading>
    Hello world
  </Button>
);

export const Disabled = (): React.ReactNode => (
  <Button onClick={(): void => console.log('button click')} disabled>
    Hello world
  </Button>
);

export const CustomClassName = (): React.ReactNode => (
  <Button
    onClick={(): void => console.log('button click')}
    className="my-custom-class"
  >
    Hello world
  </Button>
);
