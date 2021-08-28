import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import React from "react";
import Card from "src/components/Card/Card";
import { Question } from "src/pages/QA";
import QuestionResponse from "./QuestionResponse";

interface Props {
    question: Question;
}

const QuestionThread: React.FC<Props> = ({ question }) => {
    return (
        <Card>
            <Avatar name="AVATAR" size="lg" src={question.authorAvatar} />
            {/* <p>{question.authorName}</p> */}
            <Box
                style={{
                    marginTop: 14,
                    marginBottom: 14,
                }}
            >
                <em>"{question.question}"</em>
            </Box>
            {question.responses.map((response) => (
                <QuestionResponse response={response} />
            ))}
        </Card>
    );
};

export default QuestionThread;
