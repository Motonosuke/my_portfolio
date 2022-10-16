import React from 'react';

import { Box, Stack, HStack, Center } from 'components/chakra-parts/Layout';
import { Text, Heading } from 'components/chakra-parts/Typography';

export const Sidebar = () => {
  return (
    <Box>
      <Heading as="h1" size="lg" textAlign="center">
        &lt; Motonsouke / &gt;
      </Heading>
      <Stack mt={12} spacing={12}>
        <Text>自己紹介</Text>
        <Text>アプリケーション</Text>
        <Text>執筆記事</Text>
        <Text>勉強会の開催</Text>
        <Text>登壇</Text>
      </Stack>
      <Center flexDirection="column" mt={40}>
        <Text>Social Media</Text>
        <HStack>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
        </HStack>
      </Center>
    </Box>
  );
};
