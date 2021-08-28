import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
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
            <Avatar
                name="AVATAR"
                size="lg"
                src={question.authorAvatar}
                style={{
                    display: "block",
                    margin: "0 auto",
                }}
            />
            {/* <p>{question.authorName}</p> */}
            <Box
                style={{
                    marginTop: 14,
                    marginBottom: 14,
                    textAlign: "center",
                }}
            >
                <em>"{question.question}"</em>
            </Box>
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
