import React, { useState } from "react";
import { motion } from "framer-motion";
import ChatPoll from "src/components/Polls/ChatPoll";
import { Container, Text, VStack } from "@chakra-ui/layout";
import Card from "src/components/Card/Card";

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
    <VStack spacing={4} align="stretch">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        style={{
          width: "100%",
          display: "block",
          margin: "0 auto",
          padding: 10,
        }}
      >
        {polls.map((poll) => (
          <>
            <Card>
              <div style={{ textAlign: "center" }}>
                <Text fontSize="3xl">{poll.question}</Text>
              </div>
              <ChatPoll question={""} choices={poll.choices} />
            </Card>
            <br />
          </>
        ))}
      </motion.div>
    </VStack>
  );
};

export default Poll;
