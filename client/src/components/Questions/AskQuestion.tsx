import { Box, Avatar, Textarea, HStack } from "@chakra-ui/react";
import React from "react";
import jas from "../../assets/jas.png";
import { FaPaperPlane } from "react-icons/fa";

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
            <HStack>
                <Box>
                    <Avatar name="AVATAR" size="lg" src={jas} />
                </Box>
                <Box style={{ width: "100%" }}>
                    <Textarea placeholder="Ask a question!" resize={"none"} />
                </Box>
                <Box style={{ height: "100%" }}>
                    <button>
                        <FaPaperPlane />
                    </button>
                </Box>
            </HStack>
        </Box>
    );
};

export default AskQuestion;
