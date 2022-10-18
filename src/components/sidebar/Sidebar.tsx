import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';

import { Box, Stack, HStack, Center } from 'components/chakra-parts/Layout';
import { Text, Heading } from 'components/chakra-parts/Typography';
import { COLOR_CODES } from 'constants/color-codes';
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
      <Heading as="h1" size="lg" textAlign="center">
        &lt; Motonsouke / &gt;
      </Heading>
      <Stack mt={12} spacing={12}>
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
        <Text fontSize="lg" fontWeight="semibold">
          Social Media
        </Text>
        <HStack mt={2} spacing={6}>
          <Link href={ROUTE_PATHS.TWITTER_URL}>
            <a href={ROUTE_PATHS.TWITTER_URL} rel="noreferrer" target="_blank">
              <IconBrandTwitter
                color={COLOR_CODES.TWITTER}
                fill={COLOR_CODES.TWITTER}
                size={32}
                stroke={1}
                strokeLinejoin="miter"
              />
            </a>
          </Link>
          <Link href={ROUTE_PATHS.FACEBOOK_URL}>
            <a href={ROUTE_PATHS.FACEBOOK_URL} rel="noreferrer" target="_blank">
              <IconBrandFacebook color={COLOR_CODES.FACEBOOK} size={32} stroke={1.5} strokeLinejoin="miter" />
            </a>
          </Link>
          <Link href={ROUTE_PATHS.GITHUB_URL}>
            <a href={ROUTE_PATHS.GITHUB_URL} rel="noreferrer" target="_blank">
              <IconBrandGithub color="black" size={32} stroke={1.5} strokeLinejoin="miter" />
            </a>
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};
