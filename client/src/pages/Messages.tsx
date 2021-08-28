import {  Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Message } from "src/components/Message";

interface Props {}

const Messages: React.FC<Props> = () => {


  return (
    <VStack>
      <Box w="100%" h="48" backgroundColor="ghostwhite">
        <HStack overflowX="scroll" overflowY="hidden">
        </HStack>
      </Box>
    <VStack>
      <Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi.</Message>
      <Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi.</Message>
      <Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi.</Message>
      </VStack>
      </VStack>
    );
};

export default Messages;
