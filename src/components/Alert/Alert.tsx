import * as React from 'react';
import classnames from 'classnames';
import { ColorClassifierType } from 'common/types';

export interface AlertProps {
  type?: ColorClassifierType;
}

const Alert: React.FC<AlertProps> = ({ children, type = 'neutral' }) => {
  const resolvedClassName = classnames('cstl-alert', `cstl-alert-${type}`);
  return <div className={resolvedClassName}>{children}</div>;
};

export default Alert;
