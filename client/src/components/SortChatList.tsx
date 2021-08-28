import { Select, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {}

export const SortList = (props: Props) => {
  const [selected, setSelected] = useState("near me");

  const change_select = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Grid>
        <GridItem colStart={12} colEnd={12}>
          <Select borderColor="white" value={selected} onChange={change_select}>
            <option value="near me">Near me</option>
            <option value="hot">Hot</option>
            <option value="new">New</option>
          </Select>
        </GridItem>
      </Grid>

      <br />
    </>
  );
};
