import React, { type FC, useState, useRef } from 'react'
import { Text, Button, Box, Collapse } from '@chakra-ui/react'
import { stripHtml } from 'string-strip-html'
import truncate from 'lodash/truncate'
import { useSize } from '@chakra-ui/react-use-size'

const truncateLength = 175

export interface RecipeSummaryProps {
  summary: string
}

export const RecipeSummary: FC<RecipeSummaryProps> = ({ summary }) => {
  const ref = useRef(null)
  const dimensions = useSize(ref)

  const sanitizedText = stripHtml(summary).result

  const [showMore, setShowMore] = useState(false)
  const [shouldTruncate, setShouldTruncate] = useState(
    sanitizedText.length > truncateLength
  )

  const truncatedText = shouldTruncate
    ? truncate(sanitizedText, { length: truncateLength })
    : sanitizedText

  function handleClick() {
    if (shouldTruncate) {
      setShouldTruncate(false)
    }

    setShowMore((showMore) => !showMore)
  }

  function handleAnimationComplete() {
    if (!showMore) {
      setShouldTruncate(true)
    }
  }

  return (
    <Box w={'full'}>
      <Collapse
        startingHeight={dimensions?.height || 47}
        in={showMore}
        onAnimationComplete={handleAnimationComplete}
      >
        <Text ref={ref} fontSize={'md'}>
          {truncatedText}{' '}
          {sanitizedText.length > truncateLength && (
            <Button
              variant={'link'}
              colorScheme={'green'}
              onClick={handleClick}
              data-testid={'show-more-button'}
            >
              {showMore ? 'Show less' : 'Show more'}
            </Button>
          )}
        </Text>
      </Collapse>
    </Box>
  )
}
