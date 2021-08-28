import { Avatar } from "@chakra-ui/avatar";
import { Box, HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styles from "./Questions.module.scss";
import { Response } from "src/pages/QA";

interface Props {
    response: Response;
}

const QuestionResponse: React.FC<Props> = ({ response }) => {
    const [votes, setVotes] = useState<number>(response.votes);

    return (
        <Box
            style={{
                background: "#f0f0f0",
                padding: 14,
                borderRadius: 10,
                position: "relative",
                marginTop: 20,
            }}
        >
            <HStack>
                {/* Responder profile */}
                <Box style={{ marginLeft: 10, marginRight: 10, width: "100px" }}>
                    <Avatar
                        name="Avatar"
                        src={response.avatar}
                        size="md"
                        style={{
                            display: 'bllock',
                            margin: '0 auto'
                        }}
                    ></Avatar>
                    <span
                        style={{
                            fontSize: "65%",
                            display: "block",
                        }}
                    >
                        {response.name}
                    </span>
                </Box>
                {/* Votes */}
                <Box style={{ marginLeft: 10, marginRight: 10 }}>
                    <div
                        className={styles.voteButton}
                        onClick={() => setVotes(votes + 1)}
                    >
                        <BsChevronUp />
                    </div>
                    <span
                        style={{
                            color: votes > 0 ? "green" : "red",
                            userSelect: "none",
                        }}
                    >
                        {votes}
                    </span>
                    <div
                        className={styles.voteButton}
                        onClick={() => setVotes(votes - 1)}
                    >
                        <BsChevronDown />
                    </div>
                </Box>
                {/* Response */}
                <Box
                    style={{
                        background: "white",
                        height: "75px",
                        // marginLeft: "20%",
                        textAlign: "left",
                        padding: 14,
                        width: "100%",
                    }}
                >
                    {response.response}
                </Box>
            </HStack>
        </Box>
    );
};

export default QuestionResponse;
