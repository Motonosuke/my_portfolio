import { CustomNextPage } from 'next';
import React from 'react';

import { MainLayout } from 'components/Layout';
import { NotePage } from 'page-components/note';

const Note: CustomNextPage = (props) => {
  return <NotePage {...props} />;
};

Note.getLayout = MainLayout;
export default Note;
