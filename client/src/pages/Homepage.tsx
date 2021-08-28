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
  const [mapVisible, setMapVisible] = React.useState<boolean>(false);
  const [tab, setTab] = React.useState(selectedTab);

  const events: Event[] = [
    {
      name: "Climate Change Conference",
      attendance: 72,
      location: [-33.917, 151.230],
      radius: 70,
      distance: 0.1,
      tags: ["Academic", "Environmental", "Networking"],
      colour: "#68d391",
      attendees: [
        "Isabella Lee",
        "Devansh Singh",
        "Lizzie James",
        "Sam Drinkwater",
      ],
    },
    {
      name: "SYNCS BBQ",
      attendance: 10,
      location: [-33.918, 151.231],
      radius: 50,
      distance: 0.3,
      tags: ["CSE", "Fun", "Study"],
      colour: "#68d391",
      attendees: [
        "Adam Smith",
        "Romney Crawford",
        "Sarah Brown",
        "Vicky Chen",
        "Finn Bjergsen",
      ],
    },
    {
      name: "Elton John Concert",
      attendance: 119,
      location: [-33.916, 151.231],
      radius: 70,
      distance: 0.6,
      tags: ["Concert", "Music"],
      colour: "#68d391",
      attendees: ["Matt King", "Megan Fitzgerald", "Ross Lopez"],
    },
    {
      name: "Dan's Pub - Happy Hour",
      attendance: 47,
      location: [-33.917, 151.232],
      radius: 70,
      distance: 0.8,
      tags: ["Pub", "Drinks", "Happy Hour"],
      colour: "#68d391",
      attendees: ["Watson Holmes", "Lauren Hamilton"],
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
            <Tab>
              <Icon as={FaCommentAlt} style={{ marginRight: "0.5rem" }} />
              <Text>Events</Text>
            </Tab>
            <Tab>
              <Icon as={FaMapMarked} style={{ marginRight: "0.5rem" }} />
              <Text>Map</Text>
            </Tab>
            <Tab>
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
                  events={[
                    {
                      name: "1511 Lecture Group Chat",
                      attendance: 10,
                      location: [-33.918, 151.231],
                      radius: 40,
                      distance: 0.3,
                      tags: ["Study, CSE"],
                      colour: "#68d391",
                      attendees: ["Adam Smith"],
                    },
                    {
                      name: "Elton John Concert",
                      attendance: 119,
                      location: [-33.917, 151.231],
                      radius: 60,
                      distance: 0.6,
                      tags: ["Concert", "Music"],
                      colour: "#68d391",
                      attendees: ["Ross Lopez"],
                    },
                  ]}
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
