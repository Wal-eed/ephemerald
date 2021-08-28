import { Grid, GridItem, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "src/components/Card/Card";
import { SortList } from "src/components/SortChatList";

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
      {/* Content of chat list page */}
      {/* <SortList ChatList={DisplayedEvents} setChatList={setDisplayedEvents} />
       */}
      <Grid>
        <GridItem colStart={12} colEnd={12}>
          <Select borderColor="white" value={selected} onChange={change_select}>
            <option value="near me">Near me</option>
            <option value="hot">Hot</option>
            {/* <option value="new">New</option> */}
          </Select>
        </GridItem>
      </Grid>

      <br />
      {DisplayedEvents.map((event) => (
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
  );
};

export default EventList;
