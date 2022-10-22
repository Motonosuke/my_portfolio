import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub, IconUser, IconApps, IconNotes } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';

import { Box, Stack, HStack, Center } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';
import { Text } from 'components/chakra-parts/Typography';
import { COLOR_CODES } from 'constants/color-codes';
import { ROUTE_PATHS } from 'constants/route-paths';

const navList = [
  {
    icon: <IconUser size={28} stroke={1.5} strokeLinejoin="miter" />,
    name: '自己紹介',
    path: ROUTE_PATHS.INTRODUCTION,
  },
  {
    icon: <IconApps size={28} stroke={1.5} strokeLinejoin="miter" />,
    name: 'アプリケーション',
    path: ROUTE_PATHS.APPLICATION,
  },
  {
    icon: <IconNotes color="black" fill="white" size={28} stroke={1.5} />,
    name: '執筆記事',
    path: ROUTE_PATHS.NOTE,
  },
  // {
  //   icon: (
  //     <IconBrandTwitter
  //       color={COLOR_CODES.TWITTER}
  //       fill={COLOR_CODES.TWITTER}
  //       size={32}
  //       stroke={1}
  //       strokeLinejoin="miter"
  //     />
  //   ),
  //   name: '登壇',
  //   path: ROUTE_PATHS.PANELIST,
  // },
];

export const Sidebar = () => {
  return (
    <Box borderRight="1px  solid" position="sticky" top={20}>
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
            <a href={nav.path}>
              <HStack>
                {nav.icon}
                <Text>{nav.name}</Text>
              </HStack>
            </a>
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
