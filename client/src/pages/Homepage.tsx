import {
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCommentAlt, FaMapMarked } from "react-icons/fa";
import Card from "src/components/Card/Card";
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
      <div
        style={{
          borderTop: "1px solid #F2F2F2",
          borderRadius: "20px",
          // padding: 20,
          width: "100%",
          position: "relative",
          top: "-13px",
          backgroundColor: "white",
          height: "90vh",
          zIndex: 10,
        }}
      >
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
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
              <Chat ChatList={ChatList} />
            </TabPanel>
            <TabPanel>
              <p>Map</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
