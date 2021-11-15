import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  console.log(this);
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
