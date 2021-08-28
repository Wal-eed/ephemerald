import {
    Avatar,
    Box,
    Flex,
    HStack,
    Spacer,
    Text,
    Icon,
    AvatarGroup
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useState } from 'react';
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";
import pulseStyles from "./Card/Card.module.scss";

import user1 from "../assets/user1.png";
import user6 from "../assets/user6.png";


const EventList = ({ events }) => {
    const [DisplayedEvents, setDisplayedEvents] = useState(events);

    return (
        <div>
            {/* Content of chat list page */}
            <SortList ChatList={DisplayedEvents} setChatList={setDisplayedEvents} />
            {events.map((event) => (
                <>
                    <EventCard
                        name={event.name}
                        distance={event.distance}
                        attendance={event.attendance}
                        tags={event.tags}
                        colour={event.colour}
                    />
                    {/* <Card borderRadius="20px" pulse={event.attendance >= 100}>
                        <Text
                            fontSize="24px"
                            fontWeight="bold"
                            color="rgb(104, 211, 145)"
                        >
                            {event.name}
                        </Text>
                        <Text>{event.distance} km away</Text>
                        <Text>{event.attendance} people</Text>
                    </Card> */}
                    {/* <br /> */}
                </>
            ))}
        </div>
    )
}

const EventCard = ({ name, distance, attendance, tags, colour }) => {
    return (
        <Box
            className={(attendance >= 100) && pulseStyles.pulse}
            borderRadius="10px"
            padding="10px"
            width="100%"
            style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            marginBottom="15px"
            display="flex"
            flexDirection="column"
        >
            <Text
                fontSize="24px"
                fontWeight="bold"
                color={colour}
            >
                {name}
            </Text>

            <HStack>
                {tags.map((tag) => {
                    return (
                        <Tag tag={tag} colour={colour} />
                    )
                })}
            </HStack>

            <br />

            <HStack>
                {/* Distance */}
                <HStack
                    spacing="3px"
                >
                    <Icon as={FaMapMarkerAlt} w="20px" h="20px" color={colour} />
                    <Text fontWeight="bold">{distance} KM</Text>
                </HStack>

                {/* Attendance */}
                <HStack
                    spacing="3px"
                >
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
    )
}

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
    )
}

export default EventList;
