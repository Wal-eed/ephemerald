import {
    Text
} from "@chakra-ui/react";
import React, { useState } from 'react';
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";

const EventList = ({events}) => {
    const [DisplayedEvents, setDisplayedEvents] = useState(events);
    
    return (
        <div>
            {/* Content of chat list page */}
            <SortList ChatList={DisplayedEvents} setChatList={setDisplayedEvents}/>
            {events.map((event) => (
            <>
                <Card borderRadius="20px" pulse={event.attendance >= 100}>
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
