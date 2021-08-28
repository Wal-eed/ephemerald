import { Box, HStack, VStack } from "@chakra-ui/layout";
import { typography } from "@chakra-ui/styled-system";
import React from "react";
import ChatHeader from "../components/ChatHeader";
import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Card from "src/components/Card/Card";
import { Icon } from "@chakra-ui/react";
import { FaMapMarked, FaCommentAlt } from "react-icons/fa";
import { SortList } from "src/components/SortChatList";

interface Props {}

interface ChatInterface {
  heading: string;
  distance: Number;
  numPeople: Number;
}

const Chat = (props: Props) => {
 
  return (
    <>
    </>
  );
};

export default Chat;
