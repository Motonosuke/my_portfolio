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
  const workList = [
    {
      companyImage: IMAGE_PATHS.CROSSDOOR,
      companyName: '株式会社Crossdoor',
      imageAlt: 'Crossdoor, Inc',
      jobDescriptionList: [
        '既存・新規サイトの改善',
        'Atomic Designへリファクタリング',
        'Figmaを利用してプロトタイプ作成',
        'Illustratorを利用してデザイン作成',
        '社内勉強会の登壇',
      ],
      period: '2021/01 ~ 2021/5',
      position: 'Webフロントエンド',
      skillSet: CROSSDOOR_SKILL,
      tableCaption: 'Crossdoor, Inc',
    },
    {
      companyImage: IMAGE_PATHS.ATRAE,
      companyName: '株式会社アトラエ',
      imageAlt: 'Atrae, Inc',
      jobDescriptionList: [
        'フルスクラッチで新規サービスの開発',
        '既存プロダクトの新規機能実装・改善',
        '既存プロダクトのパフォーマンスチューニング',
        'Figmaを利用してプロトタイプ作成',
        'スクラムマスター',
      ],
      period: '2021/10 ~ 現在',
      position: 'Webフロントエンド',
      skillSet: ATRAE_SKILL,
      tableCaption: 'Atrae, Inc',
    },
  ];

  return (
    <Box>
      <Heading as="h2" textColor="gray">
        仕事
      </Heading>
      {workList.map((work) => (
        <TableContainer boxShadow="lg" key={work.companyName} mt={10} padding={4}>
          <Table variant="simple">
            <TableCaption>{work.tableCaption}</TableCaption>
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
                    <Text mt={4}>{work.companyName}</Text>
                    <Flex alignItems="center" flexDirection="column">
                      <Image alt={work.imageAlt} src={work.companyImage} width={197} />
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
                <Td>{work.period}</Td>
              </Tr>
              <Tr>
                <Td>ポジション</Td>
                <Td>{work.position}</Td>
              </Tr>
              <Tr>
                <Td>使用技術</Td>
                <Td>
                  <SimpleGrid columns={3} spacingY={6}>
                    {work.skillSet.map((skill) => (
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
                    {work.jobDescriptionList.map((jobDescription) => (
                      <ListItem key={jobDescription}>{jobDescription}</ListItem>
                    ))}
                  </UnorderedList>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
};
