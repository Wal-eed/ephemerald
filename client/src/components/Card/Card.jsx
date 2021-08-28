import React from "react";
import { Box } from "@chakra-ui/layout";

import styles from "./Card.module.css";

const Card = ({ borderRadius = "5px", pulse = true, children }) => {
  return (
    <Box
      className={pulse && styles.pulse}
      style={{
        borderRadius: borderRadius,
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
