import React, { useState } from "react";
import ChatPoll from "src/components/Polls/ChatPoll";
import {
    Box,
    VStack,
    StackDivider,
    Container,
    Avatar,
    HStack,
} from "@chakra-ui/react";
import QuestionThread from "src/components/Questions/QuestionThread";
import AskQuestion from "src/components/Questions/AskQuestion";
import elon from "src/assets/elon.png";
import jas from "src/assets/jas.png";
import { motion } from "framer-motion";
import Paginator from "src/components/Paginator/Paginator";
import Card from "src/components/Card/Card";
import { Text } from "@chakra-ui/react"

export interface Response {
    name: string;
    // URL to image
    avatar: string;
    response: string;
    votes: number;
}

export interface Question {
    question: string;
    authorName: string;
    authorAvatar: string;
    responses: Response[];
}

interface Poll {
    question: string;
    choices: string[];
}

interface Props {}

const QA: React.FC<Props> = () => {
    const [questions, setQuestions] = useState<Question[]>([
        {
            question: "How does one reverse a linked list?",
            authorName: "John Shepherd",
            authorAvatar: jas,
            responses: [
                {
                    name: "Elon Musk",
                    avatar: elon,
                    votes: 22,
                    response: "Yes",
                },
            ],
        },
        {
            question: "What is Dijkstra's algorithm?",
            authorName: "John Shepherd",
            authorAvatar: jas,
            responses: [
                {
                    name: "Elon Musk",
                    avatar: elon,
                    votes: 15,
                    response: "Yes",
                },
            ],
        },
        {
            question: "What is the meaning of life?",
            authorName: "John Shepherd",
            authorAvatar: jas,
            responses: [
                {
                    name: "Elon Musk",
                    avatar: elon,
                    votes: -1,
                    response: "No",
                },
                {
                    name: "Elon Musk",
                    avatar: elon,
                    votes: -5,
                    response: "No",
                },
            ],
        },
    ]);
    const [polls, setPolls] = useState<Poll[]>([
        {
            question: "What should Elton John play next?",
            choices: [
                "Rocket Man",
                "Don't Go Breaking My Heart",
                "I'm Still Standing",
            ],
        },
        {
            question: "Another question",
            choices: ["Option 1", "Option 2"],
        },
    ]);

    return (
        <>
            <Container maxW="container.lg">
                <br />
                <motion.div
                    initial={{
                        scale: 0.5,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <AskQuestion />
                </motion.div>
                <br />

                <VStack
                    spacing={4}
                    align="stretch"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                        }}
                        style={{
                            width: "100%",
                            display: "block",
                            margin: "0 auto",
                        }}
                    >
                        {polls.map(poll => (
                            <>
                                <Card>
                                    <div style={{ textAlign: 'center' }}>
                                        <Text fontSize="3xl">{poll.question}</Text>
                                    </div>
                                    <ChatPoll question={""} choices={poll.choices} />
                                </Card>
                                <br />
                            </>
                        ))}
                    </motion.div>
                </VStack>
                <hr />
                <br />
                <VStack
                    spacing={4}
                    align="stretch"
                >
                    {questions.map((question, i) => (
                        <motion.div
                            initial={{
                                x: -1000,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5 * i,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 50,
                            }}
                        >
                            <QuestionThread question={question} />
                        </motion.div>
                    ))}
                </VStack>
                <br />
                <br />
                <br />
            </Container>
            {/* <Paginator /> */}
        </>
    );
};

export default QA;
