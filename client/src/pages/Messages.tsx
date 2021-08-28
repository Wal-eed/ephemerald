import {  Box, Divider, HStack, Tag, VStack } from "@chakra-ui/react";
import React from "react";
import { Message } from "../components/Message";

interface Props {}

const Messages: React.FC<Props> = () => {


  return (
    <VStack h="100vh" w="100%">
      <HStack mt="0.5rem" p="0.5rem" w="100%" whiteSpace="nowrap" overflowX="auto" overflowY="hidden">
        <Tag minW="fit-content">Channel 1</Tag>
        <Tag minW="fit-content">Cools channel</Tag>
        <Tag minW="fit-content">uncool channel</Tag>
        <Tag minW="fit-content">lmao</Tag>
        <Tag minW="fit-content">join 4 free vbucks</Tag>
        <Tag minW="fit-content">Channel 1</Tag>
        <Tag minW="fit-content">Cools channel</Tag>
        <Tag minW="fit-content">uncool channel</Tag>
        <Tag minW="fit-content">lmao</Tag>
        <Tag minW="fit-content">join 4 free vbucks</Tag>
      </HStack>
      <Divider />
      <VStack>
        <Message name="John Smith" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
        <Message name="Bob Bobson" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
        <Message name="John Smith" time="2:07am">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ducimus!</Message>
      </VStack>
    </VStack>
    );
};

export default Messages;
