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
        株式会社アトラエでエンジニアとして仕事をしています。メインはフロントエンド担当ですが、バックエンドやネイティブアプリも触っています。
        特にTypeScriptが好きで、暇があればコードを書いたり、技術調査をしています。
      </Text>
    </Box>
  );
};
