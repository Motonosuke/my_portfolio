import { IconMenu2 } from '@tabler/icons';
import React, { FC } from 'react';

import { Divider } from 'components/chakra-parts/DataDisplay';
import { useBreakpointValue, useDisclosure } from 'components/chakra-parts/Hooks';
import { Box, Grid, GridItem, Stack } from 'components/chakra-parts/Layout';
import { CommonDrawer } from 'components/drawer';
import { Sidebar } from 'components/sidebar';
import { Skill, Work, Profile, BasicInformation } from 'page-components/self-introduction';

export const SelfIntroductionPage: FC = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const columnLeftSize = useBreakpointValue({ base: 4, xl: 3 });
  const columnRightSize = useBreakpointValue({ base: 8, xl: 9 });
  const paddingSize = useBreakpointValue({ base: 10, lg: 10, md: 6, xl: 20 });

  const { isOpen, onClose, onOpen } = useDisclosure();

  const component = (
    <Box mb={20}>
      <Stack spacing={16}>
        <Profile />
        <Divider />
        <BasicInformation />
        <Divider />
        <Skill />
        <Divider />
        <Work />
      </Stack>
    </Box>
  );
  return (
    <Box>
      <CommonDrawer isOpen={isOpen} onClose={onClose} />
      <Grid templateColumns="repeat(12, 1fr)">
        {isMobile ? (
          <>
            <GridItem colSpan={11} />
            <GridItem colSpan={1} justifyContent="end">
              <IconMenu2 color="black" onClick={onOpen} size={32} stroke={1} strokeLinejoin="miter" />
            </GridItem>
            <GridItem colSpan={12}>{component}</GridItem>
          </>
        ) : (
          <>
            <GridItem colSpan={columnLeftSize}>
              <Sidebar />
            </GridItem>
            <GridItem colSpan={columnRightSize} px={paddingSize}>
              {component}
            </GridItem>
          </>
        )}
      </Grid>
    </Box>
  );
};
