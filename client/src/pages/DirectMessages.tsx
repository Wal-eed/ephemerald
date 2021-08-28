import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, Flex, VStack, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Message } from "src/components/Message";
import MessageInput from "src/components/MessageInput";
import { IMessage } from "./Messages";
import { Link } from "react-router-dom";

const DirectMessages = ({ backToMessages }) => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      text: "Hey, I'm not real, but you might be! Hope you enjoyed this test message!",
      time: null,
      name: "Adam Smith",
    },
  ]);
  const handleMessageSend = (value) => setMessages([...messages, value]);

  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      justifyContent="space-between"
      overflowY="hidden"
    >
      <VStack w="100%" alignItems="start" overflowY="auto">
        <div
          onClick={backToMessages}
          style={{
            cursor: "pointer",
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
            <span>Back to Messages</span>
          </Link>
        </div>
        {messages
          ? messages.map((msg) => {
              return (
                <motion.div
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
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
        <MessageInput channel="" onEnterPressed={handleMessageSend} />
      </Flex>
    </Flex>
  );
};

export default DirectMessages;
