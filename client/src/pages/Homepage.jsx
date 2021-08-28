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
import { AiFillMessage, AiFillTrophy } from "react-icons/ai";
import Card from "src/components/Card/Card";
import EventList from "src/components/EventList";
import { Event } from "src/interfaces/Event";
import ChatHeader from "../components/ChatHeader";
import Map from "./Map";
import SplashScreen from "src/components/SplashScreen/SplashScreen";
import DirectMessages from "src/pages/DirectMessages";
import DirectMessagesList from "src/pages/DirectMessagesList";

const Home = ({ showSplash, selectedTab = 0 }) => {
  const [mapVisible, setMapVisible] = React.useState(false);
  const [tab, setTab] = React.useState(selectedTab);

  const [events, setEvents] = React.useState([]);

  const mockLocation = [-33.918, 151.231];

  React.useEffect(() => {
    window.socket.emit("getEvents", mockLocation, (viewableEvents) => {
      setEvents(viewableEvents);
    });
  }, []);

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
          defaultIndex={tab}
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
            <Tab style={{position: "relative", top: -1}}>
              <Icon as={FaCommentAlt} style={{ marginRight: "0.5rem" }} />
              <Text>Events</Text>
            </Tab>
            <Tab style={{position: "relative", top: -1}}>
              <Icon as={FaMapMarked} style={{ marginRight: "0.5rem" }} />
              <Text>Map</Text>
            </Tab>
            <Tab style={{position: "relative", top: -1}}>
              <Icon as={AiFillMessage} style={{ marginRight: "0.5rem" }} />
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
                  height: "calc(100vh - 60px - 50px)",
                }}
              >
                <Map
                  me={[-33.9177, 151.2302]}
                  events={events}
                  visible={mapVisible}
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div
                style={{
                  width: "100%",
                  height: "calc(100vh - 70px - 90px)",
                }}
              >
                <DirectMessagesList />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
