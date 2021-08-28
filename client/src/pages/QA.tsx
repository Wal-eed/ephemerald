import React, { useState } from "react";
import ChatPoll from "src/components/Polls/ChatPoll";
import { Box, VStack, StackDivider, Container, Avatar } from "@chakra-ui/react";
import QuestionThread from "src/components/Questions/QuestionThread";
import AskQuestion from "src/components/Questions/AskQuestion";
import elon from "src/assets/elon.png";
import jas from "src/assets/jas.png";

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
                    votes: 2,
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
                    votes: 5,
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
                    response: "Yes",
                },
            ],
        },
    ]);

    return (
        <Container maxW="container.lg">
            <div
                style={{
                    width: 500,
                    display: "block",
                    margin: "0 auto",
                }}
            >
                <ChatPoll
                    question={"What should Elton John play next?"}
                    choices={[
                        "Rocket Man",
                        "Don't Go Breaking My Heart",
                        "I'm Still Standing",
                        "Circle Of Life",
                        "Can You Feel The Love Tonight",
                        "Candle In The Wind",
                    ]}
                />
            </div>

            <AskQuestion />

            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
            >
                {questions.map((question) => (
                    <QuestionThread question={question} />
                ))}
            </VStack>
        </Container>
    );
};

export default QA;
