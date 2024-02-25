import React from 'react';
import { BounceLoader } from 'react-spinners';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <BounceLoader color="#38CB89" />
    </div>
  );
};

export default Loader;
