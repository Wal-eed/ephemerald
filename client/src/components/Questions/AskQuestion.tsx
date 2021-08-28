import { Box, Avatar, Textarea } from "@chakra-ui/react";
import React from "react";
import jas from "../../assets/jas.png";

interface Props {}

const AskQuestion: React.FC<Props> = () => {
    return (
        <Box
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                marginBottom: 20,
                padding: 20,
                position: "relative",
            }}
        >
            <Avatar
                name="AVATAR"
                size="lg"
                src={jas}
                style={{
                    position: "absolute",
                    left: "4%",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            />
            <Textarea
                placeholder="Ask a question!"
                resize={"none"}
                style={{
                    display: "inline",
                    width: "85%",
                    marginLeft: 80,
                }}
            />
        </Box>
    );
};

export default AskQuestion;
