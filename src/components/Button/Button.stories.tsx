import * as React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const defaultButton = () => <Button onClick={() => console.log('button click')}>Hello world</Button>;
export const loadingButton = () => <Button onClick={() => console.log('button click')} loading>Hello world</Button>;
export const disabledButton = () => <Button onClick={() => console.log('button click')} disabled>Hello world</Button>;
