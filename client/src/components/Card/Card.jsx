import React from "react";
import { Box } from "@chakra-ui/layout";

const Card = ({ children }) => {
  return (
    <Box
      style={{
        borderRadius: "5px",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        padding: 20,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
