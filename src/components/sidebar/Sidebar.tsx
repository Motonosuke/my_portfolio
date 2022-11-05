import { IconBrandTwitter, IconBrandFacebook, IconBrandGithub, IconUser, IconApps, IconNotes } from '@tabler/icons';
import Link from 'next/link';
import React from 'react';

import { useBreakpointValue } from 'components/chakra-parts/Hooks';
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
  const isMobile = useBreakpointValue({ base: true, xl: false });

  const paddingSize = useBreakpointValue({
    base: 8,
    xl: 0,
  });

  const textSize = useBreakpointValue({
    base: 'xl',
    xl: '2xl',
  });

  return (
    <Box borderRight={isMobile ? undefined : '1px  solid'} position="sticky" top={20}>
      <Stack px={paddingSize} spacing={12}>
        <Link href={ROUTE_PATHS.HOME} passHref>
          <chakra.span fontSize={textSize} fontWeight="bold">
            &lt; Motonsouke / &gt;
          </chakra.span>
        </Link>
        {navList.map((nav) => (
          <Link href={nav.path} key={nav.path} passHref>
            <HStack>
              {nav.icon}
              <Text>{nav.name}</Text>
            </HStack>
          </Link>
        ))}
      </Stack>
      <Center flexDirection="column" mt={40}>
        <Text fontSize="lg" fontWeight="semibold">
          Social Media
        </Text>
        <HStack mt={2} spacing={6}>
          <Link href={ROUTE_PATHS.TWITTER_URL} passHref rel="noreferrer" target="_blank">
            <IconBrandTwitter
              color={COLOR_CODES.TWITTER}
              fill={COLOR_CODES.TWITTER}
              size={32}
              stroke={1}
              strokeLinejoin="miter"
            />
          </Link>
          <Link href={ROUTE_PATHS.FACEBOOK_URL} passHref rel="noreferrer" target="_blank">
            <IconBrandFacebook color={COLOR_CODES.FACEBOOK} size={32} stroke={1.5} strokeLinejoin="miter" />
          </Link>
          <Link href={ROUTE_PATHS.GITHUB_URL} passHref rel="noreferrer" target="_blank">
            <IconBrandGithub color="black" size={32} stroke={1.5} strokeLinejoin="miter" />
          </Link>
        </HStack>
      </Center>
    </Box>
  );
};
