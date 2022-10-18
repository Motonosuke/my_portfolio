import Image from 'next/image';
import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from 'components/chakra-parts/DataDisplay';
import { Box, Center, Stack } from 'components/chakra-parts/Layout';
// import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Text, Heading } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';

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
          <TableContainer>
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
        {/* <Box>
          <Heading as="h2">保有スキル</Heading>
        </Box> */}
      </Stack>
    </Box>
  );
};
