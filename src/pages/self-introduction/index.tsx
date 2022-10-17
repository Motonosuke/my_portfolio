import { CustomNextPage } from 'next';
import React from 'react';

import { MainLayout } from 'components/Layout';
import { SelfIntroductionPage } from 'page-components/self-introduction';

const SelfIntroduction: CustomNextPage = (props) => {
  return <SelfIntroductionPage {...props} />;
};

SelfIntroduction.getLayout = MainLayout;
export default SelfIntroduction;
