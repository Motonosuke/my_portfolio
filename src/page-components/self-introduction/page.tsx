import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from 'components/chakra-parts/DataDisplay';
import { Box, Center, Stack, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Text, Heading } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';

const BASIC_SKILL = [
  { name: 'HTML', path: IMAGE_PATHS.HTML_ICON },
  { name: 'CSS', path: IMAGE_PATHS.CSS_ICON },
  { name: 'JavaScript', path: IMAGE_PATHS.JAVASCRIPT_ICON },
  { name: 'TypeScript', path: IMAGE_PATHS.TYPESCRIPT_ICON },
  { name: 'React', path: IMAGE_PATHS.REACT_ICON },
  { name: 'Next.js', path: IMAGE_PATHS.NEXTJS_ICON },
  { name: 'Vue.js', path: IMAGE_PATHS.VUE_ICON },
  { name: 'Nuxt.js', path: IMAGE_PATHS.NUXT_ICON },
  { name: 'Dart', path: IMAGE_PATHS.DART_ICON },
  { name: 'Flutter', path: IMAGE_PATHS.FLUTTER_ICON },
];

const STYLE_SKILL = [
  { name: 'Tailwind CSS', path: IMAGE_PATHS.TAILWIND_ICON },
  { name: 'Chakra UI', path: IMAGE_PATHS.CHAKRA_ICON },
  { name: 'Mantine UI', path: IMAGE_PATHS.MANTINE_ICON },
  { name: 'Vuetify', path: IMAGE_PATHS.VUETIFY_ICON },
];

const DESIGN_SKILL = [
  { name: 'Figma', path: IMAGE_PATHS.FIGMA_ICON },
  { name: 'Illustrator', path: IMAGE_PATHS.ILLUST_ICON },
  { name: 'Photoshop', path: IMAGE_PATHS.PHOTOSHOP_ICON },
];

// const skillCrossdoorLanguage = [
//   { path: '/images/skill-icon/Vue-500x500.png' },
//   { path: '/images/skill-icon/Nuxt-500x500.png' },
// ];

// const skillAtraeLanguage = [
//   { path: '/images/skill-icon/React-500x500.png' },
//   { path: '/images/skill-icon/Next.js-500x500.png' },
//   { path: '/images/skill-icon/Typescript-500x500.png' },
// ];

export const SelfIntroductionPage: FC = () => {
  return (
    <Box>
      <Stack spacing={16}>
        <Box>
          <Heading as="h1">自己紹介</Heading>
          <Center>
            <Image alt="自分のアイコン" height={380} src={IMAGE_PATHS.MY_IMAGE} width={380} />
          </Center>
          <Text>飯山 元之介（いいやま もとのすけ）と言います。</Text>
          <br />
          <Text>
            株式会社アトラエでエンジニアとして仕事をしています。メインはフロントエンド担当ですが、バックエンドやネイティブアプリも触っています。
            特にTypeScriptが好きで、暇があればコードを書いたり、技術調査をしています。
          </Text>
        </Box>
        <Box>
          <Heading as="h2">基本情報</Heading>
          <TableContainer mt={10}>
            <Table variant="simple">
              <TableCaption>Basic My Information</TableCaption>
              <Thead>
                <Tr>
                  <Th>Key</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>氏名</Td>
                  <Td>飯山 元之介</Td>
                </Tr>
                <Tr>
                  <Td>生年月日</Td>
                  <Td>1998/01/20</Td>
                </Tr>
                <Tr>
                  <Td>住所</Td>
                  <Td>東京/日本</Td>
                </Tr>
                <Tr>
                  <Td>Mail</Td>
                  <Td>motonosuke.dev@gmail.com</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Heading as="h2">保有スキル</Heading>
          <Stack mr={40} mt={8} spacing={10}>
            <Box>
              <Heading as="h3" fontSize="3xl">
                基本スキル
              </Heading>
              <SimpleGrid columns={4} mt={6} spacing={2}>
                {BASIC_SKILL.map((skill) => (
                  <Box key={skill.name}>
                    <Tooltip aria-label="A tooltip" label={skill.name}>
                      <Image alt={skill.name} height={10} src={skill.path} width={10} />
                    </Tooltip>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Heading as="h3" fontSize="3xl">
                スタイルスキル
              </Heading>
              <SimpleGrid columns={4} mt={6} spacing={2}>
                {STYLE_SKILL.map((skill) => (
                  <Box key={skill.name}>
                    <Tooltip aria-label="A tooltip" label={skill.name}>
                      <Image alt={skill.name} height={10} src={skill.path} width={10} />
                    </Tooltip>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
            <Box>
              <Heading as="h3" fontSize="3xl">
                デザインスキル
              </Heading>
              <SimpleGrid columns={4} mt={6} spacing={2}>
                {DESIGN_SKILL.map((skill) => (
                  <Box key={skill.name}>
                    <Tooltip aria-label="A tooltip" label={skill.name}>
                      <Image alt={skill.name} height={10} src={skill.path} width={10} />
                    </Tooltip>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
