import { Box } from '@chakra-ui/react'
import React from 'react'

export const Chip: React.FC = ({ children }) => {
  return (
    <Box rounded="1rem" border="1px solid black" w="fit-content" paddingInline="0.5rem" whiteSpace="nowrap">
      {children}
    </Box>
  )
}
