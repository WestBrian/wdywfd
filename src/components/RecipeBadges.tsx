import React, { type FC } from 'react'
import { Wrap, WrapItem, Badge } from '@chakra-ui/react'

export interface RecipeBadgesProps {
  badges: string[]
}

export const RecipeBadges: FC<RecipeBadgesProps> = ({ badges }) => {
  return (
    <Wrap justify={'flex-end'}>
      {badges
        .filter((badge) => !!badge)
        .map((badge) => (
          <WrapItem key={badge}>
            <Badge colorScheme={'green'}>{badge}</Badge>
          </WrapItem>
        ))}
    </Wrap>
  )
}
