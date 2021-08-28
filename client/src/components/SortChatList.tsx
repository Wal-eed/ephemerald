import { Select, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

interface Props {}

export const SortList = ({ ChatList, setChatList }) => {
  const [selected, setSelected] = useState("near me");

  const changeChatList = (val:string) => {
    let tempChatList = ChatList;
    tempChatList.sort((first, second) => {
      console.log(val);
      if (val === "near me") {
        console.log(first.distance);
        return first.distance - second.distance ;
      } else if (val === "hot") {
        console.log(first.attendance);
        return second.attendance - first.attendance ;
      }
      return 0;
    })
    console.log(tempChatList);

    setChatList(tempChatList);
  }

  const change_select = (event) => {
    const val = event.target.value;
    setSelected(val);
    changeChatList(val);
  };

  return (
    <>
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
    </>
  );
};
