import Link from 'next/link';
import React, { FC } from 'react';

import { useBreakpointValue } from 'components/chakra-parts/Hooks';
import { Box, Flex, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Heading } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';
import { ROUTE_PATHS } from 'constants/route-paths';

export const HomePage: FC = () => {
  const textSize = useBreakpointValue({
    base: '4xl',
    md: '6xl',
  });

  const imageStyle = useBreakpointValue({
    base: { height: 200, width: 150 },
    md: { height: 390, width: 260 },
  });

  const gridColumns = useBreakpointValue({
    base: { columns: 1, mt: 8, spacingX: 0, spacingY: 4 },
    lg: { columns: 3, mt: 16, spacingX: 4, spacingY: 0 },
    md: { columns: 2, mt: 16, spacingX: 8, spacingY: 8 },
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  const contentList = [
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

  const gridLayout = (
    <SimpleGrid
      columns={gridColumns?.columns}
      justifyContent="center"
      mt={gridColumns?.mt}
      spacingX={gridColumns?.spacingX}
      spacingY={gridColumns?.spacingY}
    >
      {contentList.map((content) => (
        <Link href={content.path} key={content.path}>
          <a href={content.path}>
            <Image
              alt={content.alt}
              cursor="pointer"
              height={imageStyle?.height}
              src={content.src}
              width={imageStyle?.width}
            />
          </a>
        </Link>
      ))}
    </SimpleGrid>
  );

  return (
    <Box>
      <Heading as="h1" fontSize={textSize} textAlign="center" textColor="white">
        Welcome To My Portfolio
      </Heading>
      {isMobile ? <Flex justifyContent="center">{gridLayout}</Flex> : gridLayout}
    </Box>
  );
};
