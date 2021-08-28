import React, { FC, useEffect, useState } from "react";
import Poll from "react-polls";

interface Props {
    question: string;
    choices: string[];
}

interface PollChoice {
    option: string;
    votes: number;
}

const pollStyles = {
    questionSeparator: true,
    questionSeparatorWidth: "question",
    questionBold: true,
    questionColor: "#303030",
    align: "center",
    theme: "purple",
};

const ChatPoll: FC<Props> = ({ question, choices }) => {
    // Declaring poll question and answers
    const [pollQuestion, setPollQuestion] = useState<string>(question);

    // Setting answers to state to reload the component with each vote
    const [pollAnswers, setPollAnswers] = useState<PollChoice[]>(
        choices.map((choice) => ({
            option: choice,
            votes: Math.floor(Math.random() * 1000),
        }))
    );

    useEffect(() => {
        resetPollAnswer();
    }, []);

    // Handling user vote
    // Increments the votes count of answer when the user votes
    const handleVote = (voteAnswer) => {
        const newPollAnswers = pollAnswers.map((answer) => {
            if (answer.option === voteAnswer) answer.votes++;
            return answer;
        });
        setPollAnswers(newPollAnswers);
    };

    // Explicitly clearing poll answer
    const resetPollAnswer = () => {
        localStorage.removeItem("react-polls");
    };

    return (
        <div>
            <Poll
                question={pollQuestion}
                answers={pollAnswers}
                onVote={handleVote}
                customStyles={pollStyles}
            />
        </div>
    );
};

export default ChatPoll;
