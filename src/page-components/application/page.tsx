import React, { FC } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ListItem,
  List,
} from 'components/chakra-parts/DataDisplay';
import { Box, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Heading } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';

const ATRAE_SKILL = [
  { name: 'TypeScript', path: IMAGE_PATHS.TYPESCRIPT_ICON },
  { name: 'React', path: IMAGE_PATHS.REACT_ICON },
  { name: 'Next.js', path: IMAGE_PATHS.NEXTJS_ICON },
  { name: 'Chakra UI', path: IMAGE_PATHS.CHAKRA_ICON },
  { name: 'Figma', path: IMAGE_PATHS.FIGMA_ICON },
];

export const ApplicationPage: FC = () => {
  return (
    <Box>
      <Heading as="h1">アプリケーション</Heading>
      <Box>
        <List>
          <ListItem>
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
                    <Td>タイトル</Td>
                    <Td>ポートフォリオ</Td>
                  </Tr>
                  <Tr>
                    <Td>画像</Td>
                    <Td>
                      <Image alt="atrae company" src={IMAGE_PATHS.ATRAE} width={197} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>概要</Td>
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
                    <Td>リンク</Td>
                    <Td>Webフロントエンド</Td>
                  </Tr>
                  {/* <Tr>
                    <Td>内容</Td>
                    <Td>
                      <UnorderedList spacing={4}>
                        <ListItem>フルスクラッチで新規サービスの開発</ListItem>
                        <ListItem>既存プロダクトの新規機能実装</ListItem>
                        <ListItem>既存プロダクトのパフォーマンスチューニング</ListItem>
                        <ListItem>スクラムマスター</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr> */}
                </Tbody>
              </Table>
            </TableContainer>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
