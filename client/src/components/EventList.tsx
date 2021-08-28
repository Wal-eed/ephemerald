import {
    Text
} from "@chakra-ui/react";
import React from 'react';
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";

const EventList = ({events}) => {
    return (
        <div>
            {/* Content of chat list page */}
            <SortList/>
            {events.map((event) => (
            <>
                <Card>
                <Text>{event.name}</Text>
                <Text>{event.distance} km away</Text>
                <Text>{event.attendance} people</Text>
                </Card>
                <br />
            </>
            ))}
        </div>
    )
}

export default EventList;
