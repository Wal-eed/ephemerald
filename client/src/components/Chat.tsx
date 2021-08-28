import {
    Text
} from "@chakra-ui/react";
import React from 'react';
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";

const Chat = ({ChatList}) => {
    return (
        <div>
            {/* Content of chat list page */}
            <SortList/>
            {ChatList.map((chat) => (
            <>
                <Card>
                <Text>{chat.heading}</Text>
                <Text>{chat.distance} km away</Text>
                <Text>{chat.numPeople} people</Text>
                </Card>
                <br />
            </>
            ))}
        </div>
    )
}

export default Chat
