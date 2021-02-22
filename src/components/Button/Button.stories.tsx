import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const Default = () => (
  <Button onClick={() => console.log('button clicked!')}>Default</Button>
);

export const Sizes = () => (
  <div>
    <Button
      className="mr-3"
      onClick={() => console.log('button clicked!')}
      size="sm"
    >
      Small
    </Button>
    <Button className="mr-3" onClick={() => console.log('button clicked!')}>
      Medium
    </Button>
    <Button onClick={() => console.log('button clicked!')} size="lg">
      Large
    </Button>
  </div>
);

export const Block = () => (
  <Button onClick={() => console.log('button clicked!')} block>
    Block
  </Button>
);

export const Primary = () => (
  <Button onClick={() => console.log('button clicked!')}>Primary</Button>
);

export const Loading = () => (
  <Button onClick={() => console.log('button clicked!')} loading>
    Loading
  </Button>
);

export const Disabled = () => (
  <Button onClick={() => console.log('button clicked!')} disabled>
    Disabled
  </Button>
);

export const CustomClassName = () => (
  <Button
    onClick={() => console.log('button clicked!')}
    className="my-custom-class"
  >
    Custom class
  </Button>
);
