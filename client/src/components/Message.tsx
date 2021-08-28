import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'


interface Props {
  name: string;
  time: string;
}

export const Message: React.FC<Props> = ({ name, time, children}) => {
  return (
    <HStack w="100%"  paddingInline="0.5rem">
      <Avatar name={ name}/>
      <VStack spacing={0} justifySelf="start">
        <HStack alignSelf="start"><Text as="strong">{name}</Text><Text as="i">{time}</Text></HStack>
        <Text justifySelf="start" textAlign="start">{children}</Text>
      </VStack>
    </HStack>
  )
}
