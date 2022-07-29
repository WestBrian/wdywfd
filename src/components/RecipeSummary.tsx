import React, { type FC, useState } from 'react'
import { Text, Button } from '@chakra-ui/react'
import { stripHtml } from 'string-strip-html'
import truncate from 'lodash/truncate'

export interface RecipeSummaryProps {
  summary: string
}

export const RecipeSummary: FC<RecipeSummaryProps> = ({ summary }) => {
  const [showMore, setShowMore] = useState(false)

  const sanitizedText = stripHtml(summary).result
  const truncatedText = showMore
    ? sanitizedText
    : truncate(sanitizedText, { length: 175 })

  return (
    <Text fontSize={'md'}>
      {truncatedText}{' '}
      <Button
        variant={'link'}
        colorScheme={'green'}
        onClick={() => setShowMore(!showMore)}
        data-testid={'show-more-button'}
      >
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </Text>
  )
}
