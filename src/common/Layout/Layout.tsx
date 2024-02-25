import React, { ReactNode } from 'react';
import PublicNavigation from '../../components/PublicNavigation/PublicNavigation';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <PublicNavigation />
      <div>{children}</div>;
    </>
  );
};

export default Layout;
