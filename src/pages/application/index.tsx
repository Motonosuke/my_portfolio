import { CustomNextPage } from 'next';
import React from 'react';

import { MainLayout } from 'components/Layout';
import { ApplicationPage } from 'page-components/application';

const Application: CustomNextPage = (props) => {
  return <ApplicationPage {...props} />;
};

Application.getLayout = MainLayout;
export default Application;
