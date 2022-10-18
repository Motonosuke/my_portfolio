import Link from 'next/link';
import React from 'react';

import { Box, Stack, HStack, Center } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { Text } from 'components/chakra-parts/Typography';
import { ROUTE_PATHS } from 'constants/route-paths';

const navList = [
  {
    name: '自己紹介',
    path: ROUTE_PATHS.INTRODUCTION,
  },
  {
    name: 'アプリケーション',
    path: ROUTE_PATHS.APPLICATION,
  },
  {
    name: '執筆記事',
    path: ROUTE_PATHS.NOTE,
  },
  {
    name: '登壇',
    path: ROUTE_PATHS.PANELIST,
  },
];

export const Sidebar = () => {
  return (
    <Box>
      <Stack spacing={12}>
        <Link href={ROUTE_PATHS.HOME}>
          <a href={ROUTE_PATHS.HOME}>
            <chakra.span fontSize="2xl" fontWeight="bold">
              &lt; Motonsouke / &gt;
            </chakra.span>
          </a>
        </Link>
        {navList.map((nav) => (
          <Link href={nav.path} key={nav.path}>
            <a href={nav.path}>{nav.name}</a>
          </Link>
        ))}
        {/* <Text>自己紹介</Text>
        <Text>アプリケーション</Text>
        <Text>執筆記事</Text>
        <Text>勉強会の開催</Text>
        <Text>登壇</Text> */}
      </Stack>
      <Center flexDirection="column" mt={40}>
        <Text>Social Media</Text>
        <HStack>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
        </HStack>
      </Center>
    </Box>
  );
};
