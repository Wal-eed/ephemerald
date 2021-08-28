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
import { FaMapMarked } from "react-icons/fa";

interface Props {}

interface ChatInterface {
  heading: string;
  distance: Number;
  numPeople: Number;
}

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
      <ChatHeader />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <Icon as={FaMapMarked} />
            {" Events"}
          </Tab>
          <Tab>
            <Text>
              <Icon as={FaMapMarked} />
              {" Map"}
            </Text>
          </Tab>
          <Tab>
            <Icon as={FaMapMarked} />
            {" Directs"}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {ChatList.map((chat) => (
              <>
                <Card>
                  <Text>{chat.heading}</Text>
                  <Text>{chat.distance} km away</Text>
                  <Text>{chat.numPeople} people</Text>
                </Card>
                <br />
              </>
            ))}
          </TabPanel>
          <TabPanel>
            <p>Map</p>
          </TabPanel>
          <TabPanel>
            <p>Direct</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Chat;
