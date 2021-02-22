import React from 'react';
import classnames from 'classnames';
import { ColorClassifier } from 'common/types';

export interface AlertProps {
  type?: ColorClassifier;
  title?: string;
  className?: string;
}

const ALERT_COLOR_MAP = {
  [ColorClassifier.NEUTRAL]: 'gray',
  [ColorClassifier.INFO]: 'blue',
  [ColorClassifier.SUCCESS]: 'green',
  [ColorClassifier.CAUTION]: 'yellow',
  [ColorClassifier.ERROR]: 'red',
};
const getTypeMappedAlertStyles = (type: ColorClassifier) =>
  `bg-${ALERT_COLOR_MAP[type]}-100 border-${ALERT_COLOR_MAP[type]}-500`;

const Alert: React.FC<AlertProps> = ({
  type = ColorClassifier.NEUTRAL,
  children,
  className,
}) => {
  const alertStyles = getTypeMappedAlertStyles(type);
  return (
    <div
      className={classnames(
        'p-6 mb-4 rounded-md border',
        alertStyles,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
