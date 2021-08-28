import React from "react";
import { Box } from "@chakra-ui/layout";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "./Card.module.scss";

const Card = ({ ellipses = false, children }) => {
    return (
        <Box
            style={{
                borderRadius: "5px",
                boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                padding: 20,
                position: "relative",
                width: '100%'
            }}
        >
            {ellipses && (
                <div className={styles.ellipses}>
                    <BsThreeDotsVertical />
                </div>
            )}
            {children}
        </Box>
    );
};

export default Card;
