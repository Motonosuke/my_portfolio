import React from 'react';

import { useBreakpointValue } from 'components/chakra-parts/Hooks';
import { Box, Stack, SimpleGrid } from 'components/chakra-parts/Layout';
import { Image } from 'components/chakra-parts/MediaAndIcon';
import { Tooltip } from 'components/chakra-parts/Overlay';
import { Heading } from 'components/chakra-parts/Typography';
import { BASIC_SKILL, DESIGN_SKILL, STYLE_SKILL } from 'constants/data/skill-set';

export const Skill = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const skillSetList = [
    {
      skillSet: BASIC_SKILL,
      title: '基本スキル',
    },
    {
      skillSet: DESIGN_SKILL,
      title: 'デザインスキル',
    },
    {
      skillSet: STYLE_SKILL,
      title: 'スタイルスキル',
    },
  ];

  return (
    <Box>
      <Heading as="h2" textColor="gray">
        保有スキル
      </Heading>
      <Stack mr={isMobile ? 0 : 40} mt={8} spacing={10}>
        {skillSetList.map((skillSet) => (
          <Box key={skillSet.title}>
            <Heading as="h3" fontSize="2xl">
              {skillSet.title}
            </Heading>
            <SimpleGrid columns={4} mt={6} spacing={2}>
              {skillSet.skillSet.map((skill) => (
                <Box key={skill.name}>
                  <Tooltip aria-label="A tooltip" label={skill.name}>
                    <Image alt={skill.name} height={10} src={skill.path} width={10} />
                  </Tooltip>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
