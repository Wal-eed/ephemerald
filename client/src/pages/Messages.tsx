import {
  Divider,
  Flex,
  HStack,
  Tag,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Message } from "src/components/Message";
import MessageInput from "src/components/MessageInput";

interface IProps {}

export interface IMessage {
  text: string;
  time: string;
  name: string;
}

const Messages: React.FC<IProps> = () => {
  const [channels, setChannels] = useState([
    "channel 1",
    "cool channel",
    "join 4 vbucks",
  ]);
  const [activeChannel, setActiveChannel] = useState("channel 1");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [joined, setJoined] = useState(false);

  const handleMessageSend = (value) => setMessages([...messages, value]);

  return (
    <VStack h="100vh" w="100%">
      <HStack
        mt="0.5rem"
        p="0.5rem"
        w="100%"
        whiteSpace="nowrap"
        overflowX="auto"
        overflowY="hidden"
      >
        {channels.map((channel) => {
          return <Tag minW="fit-content">{channel}</Tag>;
        })}
      </HStack>
      <Divider />
      <Flex h="100%" flexDir="column" justifyContent="space-between">
        <VStack>
          {messages
            ? messages.map((msg) => {
                return (
                  <Message name={msg.name} time={msg.time}>
                    {msg.text}
                  </Message>
                );
              })
            : null}
        </VStack>
        <Flex p="1rem" justifyContent="center" alignItems="center">
          {!joined ? (
            <Button onClick={() => setJoined(true)}>Join room</Button>
          ) : (
            <MessageInput
              channel={activeChannel}
              onEnterPressed={handleMessageSend}
            />
          )}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Messages;
