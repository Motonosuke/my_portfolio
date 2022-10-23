import type { CustomLayout } from 'next';

// import { Footer } from 'components/Footer';
import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Box mt={20} mx="auto" width="80vw">
        {page}
      </Box>
      {/* <Footer /> */}
    </chakra.main>
  );
};
