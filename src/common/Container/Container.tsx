import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`${styles.container} ${className ? className : ''}`}>{children}</div>;
};

export default Container;
