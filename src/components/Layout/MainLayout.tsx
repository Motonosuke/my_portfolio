import type { CustomLayout } from 'next';

// import { Footer } from 'components/Footer';
import { Box, Grid, GridItem } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { Sidebar } from 'components/sidebar';

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Box mt={20} mx="auto" width="80vw">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={3}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={9} px={20}>
            {page}
          </GridItem>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </chakra.main>
  );
};
