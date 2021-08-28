import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Message: React.FC = ({ children}) => {
  return (
    <HStack>
{children}
    </HStack>
  )
}
