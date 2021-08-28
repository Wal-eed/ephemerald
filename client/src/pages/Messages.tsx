import {  Box, Divider, HStack, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Chip } from "src/components/Chip";
import { Message } from "src/components/Message";

interface Props {}

const Messages: React.FC<Props> = () => {


  return (
    <VStack>
      <HStack w="100%" p="0.5rem" mt="0.5rem" overflowX="auto" overflowY="hidden" whiteSpace="nowrap" wrap="nowrap">
        <Chip>Channel 1</Chip>
        <Chip>Cools channel</Chip>
        <Chip>uncool channel</Chip>
        <Chip>lmao</Chip>
        <Chip>join 4 free vbucks</Chip>
        <Chip>Channel 1</Chip>
        <Chip>Cools channel</Chip>
        <Chip>uncool channel</Chip>
        <Chip>lmao</Chip>
        <Chip>join 4 free vbucks</Chip>
      </HStack>
      <Divider />
      <VStack divider={<StackDivider borderColor="gray.100" opacity="30%" />} >
        <Message name="John Smith" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
        <Message name="Bob Bobson" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
        <Message name="John Smith" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
      </VStack>
    </VStack>
    );
};

export default Messages;
