import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import React, { type FC } from 'react'
import type { GetRecipeInformation200Response } from 'spoonacular-js-sdk'

export interface RecipeMenuProps {
  recipe: GetRecipeInformation200Response
}

export const RecipeMenu: FC<RecipeMenuProps> = ({ recipe }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<EllipsisHorizontalIcon width={20} />}
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
