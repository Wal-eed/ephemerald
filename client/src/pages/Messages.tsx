import { Divider, Flex, HStack, Tag, VStack, Button } from "@chakra-ui/react";
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
  const [channels, setChannels] = useState(["Main Channel", "Polls", "Q&A"]);
  const [activeChannel, setActiveChannel] = useState(channels[0]);
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
          return (
            <Tag
              onClick={() => setActiveChannel(channel)}
              minW="fit-content"
              style={{
                background: activeChannel === channel && "#2bc253",
                color: activeChannel === channel && "white",
              }}
            >
              {channel}
            </Tag>
          );
        })}
      </HStack>
      <Divider />
      {activeChannel === ""}
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        justifyContent="space-between"
        overflowY="hidden"
      >
        <VStack w="100%" alignItems="start" overflowY="auto">
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
