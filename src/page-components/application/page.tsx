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
import { Link } from 'components/chakra-parts/Navigation';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Heading, Text } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';
import { ROUTE_PATHS } from 'constants/route-paths';

const PORTFOLIO_APPLICATION_SKILL = [
  { name: 'TypeScript', path: IMAGE_PATHS.TYPESCRIPT_ICON },
  { name: 'React', path: IMAGE_PATHS.REACT_ICON },
  { name: 'Next.js', path: IMAGE_PATHS.NEXTJS_ICON },
  { name: 'Chakra UI', path: IMAGE_PATHS.CHAKRA_ICON },
];

const NOGIZAKRA_APPLICATION_SKILL = [
  { name: 'TypeScript', path: IMAGE_PATHS.TYPESCRIPT_ICON },
  { name: 'React', path: IMAGE_PATHS.REACT_ICON },
  { name: 'Next.js', path: IMAGE_PATHS.NEXTJS_ICON },
  { name: 'Mantine UI', path: IMAGE_PATHS.MANTINE_ICON },
];

export const ApplicationPage: FC = () => {
  return (
    <Box mb={20}>
      <Heading as="h1" textColor="gray">
        アプリケーション
      </Heading>
      <Box>
        <List>
          <ListItem>
            <TableContainer boxShadow="lg" mt={10} padding={4} px={10}>
              <Table variant="simple">
                <TableCaption>ポートフォリオ</TableCaption>
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
                      <Image alt="portfolio" src={IMAGE_PATHS.PORTFOLIO_MOCK} width={240} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>概要</Td>
                    <Td fontSize="sm">
                      本サイトです。
                      <br />
                      アプリケーションや執筆記事が増え次第、随時更新していきます。
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>使用技術</Td>
                    <Td>
                      <SimpleGrid columns={3} spacingY={6}>
                        {PORTFOLIO_APPLICATION_SKILL.map((skill) => (
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
                    <Td>
                      <Link _hover={{ textColor: 'primary.300' }} href={ROUTE_PATHS.PORTFOLIO_URL} passHref>
                        <a aria-label="portfolio" href={ROUTE_PATHS.PORTFOLIO_URL} rel="noreferrer" target="_blank">
                          {ROUTE_PATHS.PORTFOLIO_URL}
                        </a>
                      </Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ListItem>
          <ListItem>
            <TableContainer boxShadow="lg" mt={10} padding={4} px={10}>
              <Table variant="simple">
                <TableCaption>乃木坂ラジオまとめサイト</TableCaption>
                <Thead>
                  <Tr>
                    <Th>key</Th>
                    <Th>Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>タイトル</Td>
                    <Td>乃木坂ラジオまとめサイト</Td>
                  </Tr>
                  <Tr>
                    <Td>画像</Td>
                    <Td>
                      <Image alt="乃木坂ラジオアプリ" src={IMAGE_PATHS.NOIGZAKA_APP_MOCK} width={240} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>概要</Td>
                    <Td fontSize="sm">
                      <Text maxW="90%" overflow="wrap" whiteSpace="break-spaces">
                        乃木坂46のラジオを編集、サムネ作りなど全て行いYoutubeに投稿しています。
                        <br />
                        ラジオをタイムスケジュールごとにまとたり、ラジオ時間内にツイートされたハッシュタグをまとめたりしています。
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>使用技術</Td>
                    <Td>
                      <SimpleGrid columns={3} spacingY={6}>
                        {NOGIZAKRA_APPLICATION_SKILL.map((skill) => (
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
                    <Td>
                      <Link _hover={{ textColor: 'primary.300' }} href={ROUTE_PATHS.NOGIZAKA_URL} passHref>
                        <a aria-label="nogizaka radio" href={ROUTE_PATHS.NOGIZAKA_URL} rel="noreferrer" target="_blank">
                          {ROUTE_PATHS.NOGIZAKA_URL}
                        </a>
                      </Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
