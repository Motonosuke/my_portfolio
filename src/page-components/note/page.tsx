import { IconMenu2 } from '@tabler/icons';
import Link from 'next/link';
import React, { FC } from 'react';

import { ZennIcon } from 'components/Icons';
import { useBreakpointValue, useDisclosure } from 'components/chakra-parts/Hooks';
import { Box, Center, Grid, GridItem } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { Heading } from 'components/chakra-parts/Typography';
import { CommonDrawer } from 'components/drawer';
import { Sidebar } from 'components/sidebar';
import { ROUTE_PATHS } from 'constants/route-paths';

export const NotePage: FC = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const columnLeftSize = useBreakpointValue({ base: 4, xl: 3 });
  const columnRightSize = useBreakpointValue({ base: 8, xl: 9 });
  const paddingSize = useBreakpointValue({ base: 10, lg: 10, md: 6, xl: 20 });
  const widthSize = useBreakpointValue({ base: undefined, md: 64 });

  const { isOpen, onClose, onOpen } = useDisclosure();

  const component = (
    <Box>
      <Heading as="h1" textColor="gray">
        執筆記事
      </Heading>
      <Box borderRadius="md" boxShadow="xl" mt={10} p={4} width={widthSize}>
        <Center mt={4}>
          <ZennIcon fontSize="lg" />
        </Center>
        <Link href={ROUTE_PATHS.ZENN_ACHIEVEMENTS_URL} passHref rel="noreferrer" target="_blank">
          <Text _hover={{ textColor: 'primary.400', textDecoration: 'underline' }} fontWeight="semibold" mt={10}>
            【総まとめ】Github Achievementsて何があるんだっけか？ 2022年11月時点
          </Text>
        </Link>
        <Text fontSize="sm" mt={2} textAlign="right" textColor="gray.600">
          2022/11/06
        </Text>
      </Box>
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
