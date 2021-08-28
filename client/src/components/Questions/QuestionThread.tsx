import { Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import jas from "../../assets/jas.png";
import elon from "../../assets/elon.png";

interface Props { }

const QuestionThread: React.FC<Props> = () => {
    return (
        <Box
            style={{
                borderRadius: "5px",
                boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                padding: 20,
            }}
        >
            <Avatar
                name="AVATAR"
                size="lg"
                src={jas}
            // style={{
            //     position: "absolute",
            //     left: "4%",
            //     top: "50%",
            //     transform: "translateY(-50%)",
            // }}
            />
            <Box
                style={{
                    marginTop: 14,
                    marginBottom: 14,
                }}
            >
                <em>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto odit sit accusamus ut reprehenderit provident
                    nesciunt explicabo quo. Optio et iusto animi quasi voluptas
                    officiis alias voluptate accusantium omnis beatae?"
                </em>
            </Box>
            <Box
                style={{
                    background: "#f0f0f0",
                    padding: 14,
                    borderRadius: 10,
                    position: "relative",
                }}
            >
                <Avatar
                    name="Avatar"
                    src={elon}
                    size="md"
                    style={{
                        position: "absolute",
                        left: "2%",
                    }}
                ></Avatar>
                <Box
                    style={{
                        background: "white",
                        height: "50px",
                        marginLeft: "70px",
                        textAlign: "left",
                        padding: 14,
                    }}
                >
                    A: yes
                </Box>
            </Box>
        </Box>
    );
};

export default QuestionThread;
