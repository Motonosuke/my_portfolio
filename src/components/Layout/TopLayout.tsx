import type { CustomLayout } from 'next';

import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { IMAGE_PATHS } from 'constants/image-paths';

export const TopLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Box backgroundImage={IMAGE_PATHS.BACKGROUND_TOP_IMAGE} minHeight="100vh">
        <Box mx="auto" py={20} width="70vw">
          {page}
        </Box>
      </Box>
    </chakra.main>
  );
};
