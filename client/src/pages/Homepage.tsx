import {
    Icon, Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";
import React from "react";
import { FaCommentAlt, FaMapMarked } from "react-icons/fa";
import Chat from "src/components/Chat";
import ChatHeader from "../components/ChatHeader";

interface Props {}

interface ChatInterface {
  heading: string;
  distance: Number;
  numPeople: Number;
}

const Home = (props: Props) => {
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
            <Icon as={FaCommentAlt} style={{ marginRight: "0.5rem" }} />
            <Text>Events</Text>
          </Tab>
          <Tab>
            <Icon as={FaMapMarked} style={{ marginRight: "0.5rem" }} />
            <Text>Map</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Chat ChatList={ChatList}/>
          </TabPanel>
          <TabPanel>
            <p>Map</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
