import { IconChevronRight } from '@tabler/icons';
import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from 'components/chakra-parts/DataDisplay';
import { ListItem, UnorderedList } from 'components/chakra-parts/DataDisplay';
import { Button } from 'components/chakra-parts/Forms';
import { Box, Flex, Center, Stack, HStack, SimpleGrid } from 'components/chakra-parts/Layout';
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

const CROSSDOOR_SKILL = [
  { name: 'Vue.js', path: IMAGE_PATHS.VUE_ICON },
  { name: 'Nuxt.js', path: IMAGE_PATHS.NUXT_ICON },
  { name: 'Vuetify', path: IMAGE_PATHS.VUETIFY_ICON },
  { name: 'Figma', path: IMAGE_PATHS.FIGMA_ICON },
  { name: 'Illustrator', path: IMAGE_PATHS.ILLUST_ICON },
  { name: 'Photoshop', path: IMAGE_PATHS.PHOTOSHOP_ICON },
];

const ATRAE_SKILL = [
  { name: 'TypeScript', path: IMAGE_PATHS.TYPESCRIPT_ICON },
  { name: 'React', path: IMAGE_PATHS.REACT_ICON },
  { name: 'Next.js', path: IMAGE_PATHS.NEXTJS_ICON },
  { name: 'Chakra UI', path: IMAGE_PATHS.CHAKRA_ICON },
  { name: 'Figma', path: IMAGE_PATHS.FIGMA_ICON },
];

export const SelfIntroductionPage: FC = () => {
  return (
    <Box mb={20}>
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
        <Box>
          <Heading as="h2">仕事</Heading>
          <TableContainer boxShadow="lg" mt={10} padding={4}>
            <Table variant="simple">
              <TableCaption>Crossdoor, Inc </TableCaption>
              <Thead>
                <Tr>
                  <Th>key</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>会社</Td>
                  <Td>
                    <HStack spacing={8}>
                      <Text mt={4}>株式会社Crossdoor</Text>
                      <Flex alignItems="center" flexDirection="column">
                        <Image alt="crossdoor company" src={IMAGE_PATHS.CROSSDOOR} width={197} />
                        <Button backgroundColor="primary.200" size="sm" textColor="white" width="90%">
                          Company Page
                          <IconChevronRight />
                        </Button>
                      </Flex>
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>期間</Td>
                  <Td>2021/01 ~ 2021/5</Td>
                </Tr>
                <Tr>
                  <Td>ポジション</Td>
                  <Td>Webフロントエンド</Td>
                </Tr>
                <Tr>
                  <Td>使用技術</Td>
                  <Td>
                    <SimpleGrid columns={3} spacingY={6}>
                      {CROSSDOOR_SKILL.map((skill) => (
                        <Box key={skill.name}>
                          <Tooltip aria-label="A tooltip" label={skill.name}>
                            <Image alt={skill.name} height={8} src={skill.path} width={8} />
                          </Tooltip>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td>内容</Td>
                  <Td>
                    <UnorderedList spacing={4}>
                      <ListItem>既存・新規サイトの改善</ListItem>
                      <ListItem>Atomic Designへリファクタリング</ListItem>
                      <ListItem>ネイティブアプリのテスト</ListItem>
                      <ListItem>Figmaを利用したプロトタイプ作成</ListItem>
                      <ListItem>社内勉強会の登壇</ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <TableContainer boxShadow="lg" mt={10} padding={4}>
            <Table variant="simple">
              <TableCaption>Atrae, Inc </TableCaption>
              <Thead>
                <Tr>
                  <Th>key</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>会社</Td>
                  <Td>
                    <HStack spacing={8}>
                      <Text mt={4}>株式会社アトラエ</Text>
                      <Flex alignItems="center" flexDirection="column">
                        <Image alt="atrae company" src={IMAGE_PATHS.ATRAE} width={197} />
                        <Button backgroundColor="primary.200" size="sm" textColor="white" width="90%">
                          Company Page
                          <IconChevronRight />
                        </Button>
                      </Flex>
                    </HStack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>期間</Td>
                  <Td>2021/10 ~ 現在</Td>
                </Tr>
                <Tr>
                  <Td>ポジション</Td>
                  <Td>Webフロントエンド</Td>
                </Tr>
                <Tr>
                  <Td>使用技術</Td>
                  <Td>
                    <SimpleGrid columns={3} spacingY={6}>
                      {ATRAE_SKILL.map((skill) => (
                        <Box key={skill.name}>
                          <Tooltip aria-label="A tooltip" label={skill.name}>
                            <Image alt={skill.name} height={8} src={skill.path} width={8} />
                          </Tooltip>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Td>
                </Tr>
                <Tr>
                  <Td>内容</Td>
                  <Td>
                    <UnorderedList spacing={4}>
                      <ListItem>フルスクラッチで新規サービスの開発</ListItem>
                      <ListItem>既存プロダクトの新規機能実装</ListItem>
                      <ListItem>既存プロダクトのパフォーマンスチューニング</ListItem>
                      <ListItem>スクラムマスター</ListItem>
                    </UnorderedList>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};
