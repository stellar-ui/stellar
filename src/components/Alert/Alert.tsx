import React from 'react';
import classnames from 'classnames';
import { ColorClassifierType } from 'common/types';

export interface AlertProps {
  type?: ColorClassifierType;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  className,
  type = ColorClassifierType.NEUTRAL,
}) => {
  const resolvedClassName = classnames(
    'slr-alert',
    `slr-alert-${type}`,
    className,
  );
  return <div className={resolvedClassName}>{children}</div>;
};

export default Alert;
