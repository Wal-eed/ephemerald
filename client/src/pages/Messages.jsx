import {
  Divider,
  Flex,
  HStack,
  Tag,
  VStack,
  Button,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Message } from "src/components/Message";
import MessageInput from "src/components/MessageInput";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgPoll } from "react-icons/cg";
import { BsChatDots, BsPeople } from "react-icons/bs";
import { QA, Poll } from ".";
import { motion } from "framer-motion";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { People } from "src/pages";

interface IProps {}

export interface IMessage {
  text: string;
  time: string;
  name: string;
}

const mockMessages: IMessage[] = [
  {
    text: "Wow this is so cool!",
    time: "3:13 AM",
    name: "Tim Apple",
  },
  {
    text: "Looking forward to this event.",
    time: "6:50 AM",
    name: "Joanne Van de Huis",
  },
  {
    text: "When is the event starting?",
    time: "10:11 AM",
    name: "Joey Joeson",
  },
  {
    text: "I'm stuff.",
    time: "4:20 PM",
    name: "Robert Downey Jr.",
  },
];

const Messages: React.FC<IProps> = () => {
  const shuffled = mockMessages.sort(() => 0.5 - Math.random());
  const [channels, setChannels] = useState([
    {
      name: "Chat",
      icon: <BsChatDots />,
    },
    {
      name: "Polls",
      icon: <CgPoll />,
    },
    {
      name: "Q&A",
      icon: <AiOutlineQuestionCircle />,
    },
    {
      name: "People",
      icon: <BsPeople />,
    },
  ]);
  const [activeChannel, setActiveChannel] = useState(channels[0].name);
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  const handleMessageSend = (value) => {
    window.socket.emit("message", value);
    value.name = "You";
    setMessages([...messages, value]);
  };

  window.socket.on("message", (value) => {
    setMessages([...messages, value]);
  })

  useEffect(() => {
    setMessages(shuffled.slice(0, 2));
  }, [shuffled]);

  return (
    <VStack h="100vh" w="100%">
      <HStack
        mt="0.5rem"
        p="0.5rem"
        w="100%"
        whiteSpace="nowrap"
        overflowX="auto"
        overflowY="hidden"
        style={{
          minHeight: "55px",
        }}
      >
        <Link to="/home">
          <IconButton
            class="iconButton"
            colorScheme="whiteAlpha"
            aria-label="Back"
            icon={<ChevronLeftIcon color="gray.500" />}
            style={{ marginRight: "10px" }}
          />
        </Link>

        {channels.map((channel) => (
          <HStack
            style={{
              background:
                activeChannel === channel.name ? "#2bc253" : "#dddddd",
              color: activeChannel === channel.name && "white",
              transform: activeChannel === channel.name && "scale(1.1)",
              transition: "0.25s all ease-in-out",
              padding: "10px",
              userSelect: "none",
              cursor: "pointer",
              borderRadius: 100,
              fontSize: "75%",
            }}
            onClick={() => setActiveChannel(channel.name)}
          >
            <Box>{channel.icon}</Box>
            <Box>
              <span>{channel.name}</span>
            </Box>
          </HStack>
        ))}
      </HStack>
      <Divider />
      {activeChannel === "Q&A" ? (
        <Flex w="100%" h="100%" flexDir="column" justifyContent="space-between">
          <QA />
        </Flex>
      ) : activeChannel === "Polls" ? (
        <Flex w="100%" h="100%" flexDir="column" justifyContent="space-between">
          <Poll />
        </Flex>
      ) : activeChannel === "People" ? (
        <People />
      ) : (
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
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                    >
                      <Message name={msg.name} time={msg.time}>
                        {msg.text}
                      </Message>
                    </motion.div>
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
      )}
    </VStack>
  );
};

export default Messages;
