import { Container, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import elon from "src/assets/elon.png";
import jas from "src/assets/jas.png";
import alpaca from "src/assets/alpaca.jpg";
import AskQuestion from "src/components/Questions/AskQuestion";
import QuestionThread from "src/components/Questions/QuestionThread";
import { Box } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

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
  time: number | string;
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
      time: "12:24",
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
      time: "12:43",
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
      time: "12:59",
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
  const toast = useToast();

  const postQuestion = (question: string) => {
    setQuestions([
      {
        question: question,
        time: new Date(Date.now()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        authorAvatar: alpaca,
        authorName: "Waleed",
        responses: [],
      },
      ...questions,
    ]);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box style={{ padding: 10 }}>
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
        <AskQuestion postQuestion={postQuestion} />
      </motion.div>
      <br />
      <VStack spacing={4} align="stretch">
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
    </Box>
  );
};

export default QA;
