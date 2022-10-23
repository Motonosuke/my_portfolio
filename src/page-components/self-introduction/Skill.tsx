import React from 'react';

import { useBreakpointValue } from 'components/chakra-parts/Hooks';
import { Box, Stack, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Heading } from 'components/chakra-parts/Typography';
import { BASIC_SKILL, DESIGN_SKILL, STYLE_SKILL } from 'constants/data/skill-set';

export const Skill = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Heading as="h2" textColor="gray">
        保有スキル
      </Heading>
      <Stack mr={isMobile ? 0 : 40} mt={8} spacing={10}>
        <Box>
          <Heading as="h3" fontSize="2xl">
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
          <Heading as="h3" fontSize="2xl">
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
          <Heading as="h3" fontSize="2xl">
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
  );
};
