import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { HStack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Card from "src/components/Card/Card";
import { Question } from "src/pages/QA";
import QuestionResponse from "./QuestionResponse";

interface Props {
  question: Question;
}

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const QuestionThread: React.FC<Props> = ({ question }) => {
  return (
    <Card ellipses={true}>
      <HStack>
        <Avatar name="AVATAR" size="lg" src={question.authorAvatar} />

        <Box
          style={{
            marginTop: 14,
            marginBottom: 14,
            textAlign: "center",
            display: "inline",
          }}
        >
          <VStack>
            <Box style={{ width: "100%", textAlign: "left" }}>
              <span
                style={{
                  color: "darkslategray",
                  marginRight: "10px",
                  fontWeight: "bold",
                }}
              >
                {question.authorName}
              </span>
              <span style={{ color: "grey" }}>{question.time}</span>
            </Box>
            <Box style={{ width: "100%", textAlign: "left" }}>
              <em>"{question.question}"</em>
            </Box>
          </VStack>
        </Box>
      </HStack>
      {question.responses.map((response, i) => (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5 * (i + 1),
            duration: 1,
          }}
        >
          <QuestionResponse response={response} />
        </motion.div>
      ))}
    </Card>
  );
};

export default QuestionThread;
