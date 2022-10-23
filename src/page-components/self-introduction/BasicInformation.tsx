import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from 'components/chakra-parts/DataDisplay';
import { Box } from 'components/chakra-parts/Layout';
import { Heading } from 'components/chakra-parts/Typography';

export const BasicInformation = () => {
  return (
    <Box>
      <Heading as="h2" textColor="gray">
        基本情報
      </Heading>
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
  );
};
