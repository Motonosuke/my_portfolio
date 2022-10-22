import { CustomNextPage } from 'next';
import React from 'react';

import { TopLayout } from 'components/Layout';
import { HomePage } from 'page-components/home';

const Home: CustomNextPage = (props) => {
  return <HomePage {...props} />;
};

Home.getLayout = TopLayout;
export default Home;
