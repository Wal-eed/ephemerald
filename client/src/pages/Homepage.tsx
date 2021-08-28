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
import EventList from "src/components/EventList";
import { Event } from "src/interfaces/Event";
import ChatHeader from "../components/ChatHeader";
import Map from "./Map";

interface Props {}

const Home = (props: Props) => {
  const events: Event[] = [
    {
      name: "1511 Lecture Group Chat",
      attendance: 10,
      location: [-33.918, 151.231],
      radius: 5,
      distance: 0.3
    },
    {
      name: "Elton John Concert",
      attendance: 119,
      location: [-33.917, 151.231],
      radius: 7,
      distance: 0.6
    }
  ];

  return (
    <>
      <ChatHeader />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em" style={{
          marginBottom: 0,
          background: "white"
        }}>
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
            <EventList events={events}/>
          </TabPanel>
          <TabPanel style={{
            padding: 0
          }}>
            <div style={{
              width: "100%",
              position: "absolute",
              top: 0,
              bottom: 0,
              zIndex: -1
            }}>
              <Map
							me={[-33.918, 151.231]}
							events={[
								{
									name: "1511 Lecture Group Chat",
									attendance: 10,
									location: [-33.918, 151.231],
									radius: 40,
									distance: 0.3
								},
								{
									name: "Elton John Concert",
									attendance: 119,
									location: [-33.917, 151.231],
									radius: 60,
									distance: 0.6
								}
							]}
						/>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Home;
