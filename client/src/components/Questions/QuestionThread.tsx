import { Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import jas from "../../assets/jas.png";
import elon from "../../assets/elon.png";
import Card from "src/components/Card/Card";

interface Props {}

const QuestionThread: React.FC<Props> = () => {
    return (
        <Card>
            <Avatar name="AVATAR" size="lg" src={jas} />
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
        </Card>
    );
};

export default QuestionThread;
