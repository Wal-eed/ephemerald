import {
    Text
} from "@chakra-ui/react";
import React, { useState } from 'react';
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";

const Chat = ({ChatList}) => {
    const [DisplayedChatList, setDisplayedChatList] = useState(ChatList);
    
    return (
        <div>
            {/* Content of chat list page */}
            <SortList ChatList={DisplayedChatList} setChatList={setDisplayedChatList}/>
            {ChatList.map((chat) => (
            <>
                <Card borderRadius="20px" pulse={chat.numPeople >= 100}>
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
