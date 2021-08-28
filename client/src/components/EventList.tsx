import { Search2Icon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Avatar,
  Box,
  Flex,
  HStack,
  Spacer,
  Text,
  Icon,
  AvatarGroup,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Card from "src/components/Card/Card";
import pulseStyles from "./Card/Card.module.scss";
import { Link } from "react-router-dom";
import user1 from "../assets/user1.png";
import user6 from "../assets/user6.png";

const Search = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="green.300" />}
        />
        <Input
          type="tel"
          placeholder=""
          borderRadius="20px"
          borderColor="#68d391"
        />
      </InputGroup>
    </Stack>
  );
};

const EventList = ({ events }) => {
  const [DisplayedEvents, setDisplayedEvents] = useState(events);
  console.log("Loading event list page");

  useEffect(() => {
    console.log(DisplayedEvents);
  }, [DisplayedEvents]);

  const [selected, setSelected] = useState("near me");

  const changeChatList = (val: string) => {
    let tempChatList = DisplayedEvents;
    tempChatList.sort((first, second) => {
      console.log(val);
      if (val === "near me") {
        console.log(first.distance);
        return first.distance - second.distance;
      } else if (val === "hot") {
        console.log(first.attendance);
        return second.attendance - first.attendance;
      }
      return 0;
    });
    console.log(tempChatList);

    setDisplayedEvents(tempChatList);
  };

  const change_select = (event) => {
    const val = event.target.value;
    setSelected(val);
    changeChatList(val);
  };

  return (
    <div>
      <Grid gap={5}>
        <GridItem colStart={1} colEnd={2}>
          <Search />
        </GridItem>
        <GridItem colStart={3} colEnd={3}>
          <Select borderColor="white" value={selected} onChange={change_select}>
            <option value="near me">Near me</option>
            <option value="hot">Hot</option>
            {/* <option value="new">New</option> */}
          </Select>
        </GridItem>
      </Grid>

      <br />
      {DisplayedEvents.map((event) => (
        <Link to="/messages">
          <EventCard
            name={event.name}
            distance={event.distance}
            attendance={event.attendance}
            tags={event.tags}
            colour={event.colour}
          />
        </Link>
      ))}
    </div>
  );
};
const EventCard = ({ name, distance, attendance, tags, colour }) => {
  return (
    <Box
      className={attendance >= 100 && pulseStyles.pulse}
      borderRadius="10px"
      padding="10px"
      width="100%"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
      }}
      marginBottom="15px"
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="24px" fontWeight="bold" color={colour}>
        {name}
      </Text>

      <HStack>
        {tags.map((tag) => {
          return <Tag tag={tag} colour={colour} />;
        })}
      </HStack>

      <br />

      <HStack>
        {/* Distance */}
        <HStack spacing="3px">
          <Icon as={FaMapMarkerAlt} w="20px" h="20px" color={colour} />
          <Text fontWeight="bold">{distance} KM</Text>
        </HStack>

        {/* Attendance */}
        <HStack spacing="3px">
          <Icon as={BsFillPersonFill} w="20px" h="20px" color={colour} />
          <Text fontWeight="bold">{attendance}</Text>
        </HStack>

        <Spacer />

        {/* Avatar Icons */}
        <AvatarGroup max={2}>
          <Avatar name="Adam Smith" src={user1} />
          <Avatar name="Isabella Lee" src={user6} />
        </AvatarGroup>
      </HStack>
    </Box>
  );
};

const Tag = ({ tag, colour }) => {
  return (
    <Box
      borderColor={colour}
      color={colour}
      borderWidth="2px"
      borderRadius="20px"
      paddingLeft="7px"
      paddingRight="10px"
      fontSize="10px"
    >
      {tag}
    </Box>
  );
};

export default EventList;
