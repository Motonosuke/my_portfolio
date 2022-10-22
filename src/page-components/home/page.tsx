import Link from 'next/link';
import React, { FC } from 'react';

import { Box, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Heading } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';
import { ROUTE_PATHS } from 'constants/route-paths';

export const HomePage: FC = () => {
  const imageMap = [
    {
      alt: '自己紹介',
      path: ROUTE_PATHS.INTRODUCTION,
      src: IMAGE_PATHS.PORTFOLIO_MY_IMAGE,
    },
    {
      alt: 'アプリケーション',
      path: ROUTE_PATHS.APPLICATION,
      src: IMAGE_PATHS.PORTFOLIO_APPLICATION,
    },
    {
      alt: '執筆記事',
      path: ROUTE_PATHS.NOTE,
      src: IMAGE_PATHS.PORTFOLIO_NOTE,
    },
  ];
  return (
    <Box>
      <Heading as="h1" fontSize="6xl" textAlign="center" textColor="white">
        Welcome To My Portfolio
      </Heading>
      <SimpleGrid columns={3} justifyContent="center" mt={16}>
        {imageMap.map((content) => (
          <Link href={content.path} key={content.path}>
            <a href={content.path}>
              <Image alt={content.alt} cursor="pointer" height={390} src={content.src} width={260} />
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};
