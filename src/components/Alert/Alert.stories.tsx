import React from 'react';
import Alert from './Alert';

export default { title: 'Alert' };

export const Default = () => <Alert>This is an Alert component</Alert>;

export const Types = () => (
  <>
    <Alert>This is the default Alert</Alert>
    <Alert type="info">This is the info Alert</Alert>
    <Alert type="success">This is the success Alert</Alert>
    <Alert type="caution">This is the caution Alert</Alert>
    <Alert type="error">This is the error Alert</Alert>
  </>
);
