import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  time: string;
}

export const Message: React.FC<Props> = ({ name, time, children }) => {
  return (
    <HStack w="100%" paddingInline="0.5rem">
      <Avatar name={name} />
      <VStack spacing={0} alignItems="start">
        <HStack>
          <Text as="strong">{name}</Text>
          <Text color="gray.500">{time}</Text>
        </HStack>
        <Text>{children}</Text>
      </VStack>
    </HStack>
  );
};
