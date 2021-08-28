import React, { useState } from "react";
import { motion } from "framer-motion";
import ChatPoll from "src/components/Polls/ChatPoll";
import { Container } from "@chakra-ui/layout";

interface Poll {
    question: string;
    choices: string[];
}

interface Props {}

const Poll: React.FC<Props> = () => {
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
        <Container maxW="container.lg">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                }}
                style={{
                    width: "50%",
                    display: "block",
                    margin: "0 auto",
                }}
            >
                {polls &&
                    polls.map((poll) => (
                        <ChatPoll
                            question={poll.question}
                            choices={poll.choices}
                        />
                    ))}
            </motion.div>
        </Container>
    );
};

export default Poll;
