import React from 'react';

import { Box, Center } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Heading, Text } from 'components/chakra-parts/Typography';
import { IMAGE_PATHS } from 'constants/image-paths';

export const Profile = () => {
  return (
    <Box>
      <Heading as="h1" textColor="gray">
        自己紹介
      </Heading>
      <Center>
        <Image alt="自分のアイコン" height={380} src={IMAGE_PATHS.MY_IMAGE} width={380} />
      </Center>
      <Text>飯山 元之介（いいやま もとのすけ）と言います。</Text>
      <br />
      <Text>
        株式会社アトラエでWebフロントエンジニアとして仕事をしています。
        <br />
        特にNext.js、TypeScriptが好きで、休みの日に新しい技術のキャッチアップをするために個人開発や技術検証レポジトリを作ってコードを書いています。
      </Text>
    </Box>
  );
};
