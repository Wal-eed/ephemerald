import { Box, HStack, VStack } from "@chakra-ui/layout";
import { typography } from "@chakra-ui/styled-system";
import React from "react";
import ChatHeader from "../components/ChatHeader";
import { Heading, Text } from "@chakra-ui/react";

interface Props {}

interface ChatInterface {
  heading: string;
  distance: Number;
  numPeople: Number;
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <Box marginY="5" border="1px" w="100%" p={4} borderRadius={20}>
      {children}
    </Box>
  );
};

const Chat = (props: Props) => {
  const ChatList: ChatInterface[] = [
    {
      heading: "1511 Lecture Group Chat",
      distance: 0.3,
      numPeople: 10,
    },
    {
      heading: "Elton John Concert",
      distance: 0.6,
      numPeople: 119,
    },
  ];

  return (
    <>
      <ChatHeader></ChatHeader>
      {ChatList.map((chat) => (
        <Card>
          <Text>{chat.heading}</Text>
          <Text>{chat.distance} km away</Text>
          <Text>{chat.numPeople} people</Text>
        </Card>
      ))}
    </>
  );
};

export default Chat;
