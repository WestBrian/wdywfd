import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React, { type FC } from 'react'
import { InlineResponse2004 } from '../../spoonacular-sdk'

export interface RecipeMenuProps {
  recipe: InlineResponse2004
}

export const RecipeMenu: FC<RecipeMenuProps> = ({ recipe }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<DotsHorizontalIcon width={20} />}
        aria-label={'options'}
      >
        Actions
      </MenuButton>
      <MenuList>
        {recipe.sourceUrl && (
          <MenuItem
            as={'a'}
            href={recipe.sourceUrl}
            target={'_blank'}
            rel={'noopener noreferrer'}
            fontWeight={'semibold'}
          >
            View source
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}
