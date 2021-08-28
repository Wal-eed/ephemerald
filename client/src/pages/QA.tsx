import React from "react";
import ChatPoll from "src/components/Polls/ChatPoll";
import { Box, VStack, StackDivider, Container, Avatar } from "@chakra-ui/react";
import QuestionThread from "src/components/Questions/QuestionThread";
import AskQuestion from "src/components/Questions/AskQuestion";

interface Props {}

const QA: React.FC<Props> = () => {
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
                <QuestionThread></QuestionThread>
                <QuestionThread></QuestionThread>
                <QuestionThread></QuestionThread>
            </VStack>
        </Container>
    );
};

export default QA;
