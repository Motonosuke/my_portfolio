import { IconChevronRight } from '@tabler/icons';
import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from 'components/chakra-parts/DataDisplay';
import { ListItem, UnorderedList } from 'components/chakra-parts/DataDisplay';
import { Button } from 'components/chakra-parts/Forms';
import { Box, Flex, HStack, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Text, Heading } from 'components/chakra-parts/Typography';
import { ATRAE_SKILL, CROSSDOOR_SKILL } from 'constants/data/skill-set';
import { IMAGE_PATHS } from 'constants/image-paths';

export const Work = () => {
  return (
    <Box>
      <Heading as="h2" textColor="gray">
        仕事
      </Heading>
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
  );
};
