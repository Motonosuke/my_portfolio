import { CustomNextPage } from 'next';
import React from 'react';

import { MainLayout } from 'components/Layout';
import { PanelistPage } from 'page-components/panelist';

const Panelist: CustomNextPage = (props) => {
  return <PanelistPage {...props} />;
};

Panelist.getLayout = MainLayout;
export default Panelist;
