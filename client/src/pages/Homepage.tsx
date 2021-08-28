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
import EventList from "src/components/EventList";
import { Event } from "src/interfaces/Event";
import ChatHeader from "../components/ChatHeader";
import Map from "./Map";
import SplashScreen from "src/components/SplashScreen/SplashScreen";

const Home = ({ showSplash }) => {
  const [mapVisible, setMapVisible] = React.useState<boolean>(false);

  const events: Event[] = [
    {
      name: "1511 Lecture Group Chat",
      attendance: 10,
      location: [-33.918, 151.231],
      radius: 5,
      distance: 0.3,
      tags: ["Study", "CSE"],
      colour: "#68d391",
    },
    {
      name: "Elton John Concert",
      attendance: 119,
      location: [-33.917, 151.231],
      radius: 7,
      distance: 0.6,
      tags: ["Concert", "Music"],
      colour: "#68d391",
    },
    {
      name: "Dan's Pub - Happy Hour",
      attendance: 72,
      location: [-33.917, 151.231],
      radius: 7,
      distance: 0.8,
      tags: ["Pub", "Drinks", "Happy Hour"],
      colour: "#68d391",
    },
    {
      name: "Friendly Soccer",
      attendance: 8,
      location: [-33.917, 151.231],
      radius: 7,
      distance: 1.0,
      tags: ["Soccer"],
      colour: "#68d391",
    },
  ];

  return (
    <>
      {showSplash && <SplashScreen />}
      <ChatHeader />
      <div
        style={{
          borderTop: "1px solid #F2F2F2",
          borderRadius: "25px",
          // padding: 20,
          width: "100%",
          position: "relative",
          top: "-21px",
          backgroundColor: "white",
          height: "90vh",
          zIndex: 10,
        }}
      >
        <Tabs
          isFitted
          //   variant="enclosed"
          variant="soft-rounded"
          colorScheme="green"
          onChange={(index) => setMapVisible(index === 1)}
          style={{
            height: "calc(100% - 70px)",
          }}
        >
          <TabList
            mb="1em"
            style={{
              marginBottom: 0,
              height: "50px",
            }}
          >
            <Tab>
              <Icon as={FaCommentAlt} style={{ marginRight: "0.5rem" }} />
              <Text>Events</Text>
            </Tab>
            <Tab>
              <Icon as={FaMapMarked} style={{ marginRight: "0.5rem" }} />
              <Text>Map</Text>
            </Tab>
            <Tab>
              <Icon as={FaMapMarked} style={{ marginRight: "0.5rem" }} />
              <Text>Messages</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <EventList events={events} />
            </TabPanel>
            <TabPanel
              style={{
                padding: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "calc(100vh - 70px - 50px)",
                }}
              >
                <Map
                  me={[-33.9177, 151.2302]}
                  events={[
                    {
                      name: "1511 Lecture Group Chat",
                      attendance: 10,
                      location: [-33.918, 151.231],
                      radius: 40,
                      distance: 0.3,
                      tags: ["Study, CSE"],
                      colour: "#3E00FF",
                    },
                    {
                      name: "Elton John Concert",
                      attendance: 119,
                      location: [-33.917, 151.231],
                      radius: 60,
                      distance: 0.6,
                      tags: ["Concert", "Music"],
                      colour: "#68d391",
                    },
                  ]}
                  visible={mapVisible}
                />
              </div>
            </TabPanel>
            <TabPanel>MESSAGES HERE</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Home;