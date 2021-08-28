import React, { useState } from "react";
import { Message } from "src/components/Message";
import DirectMessages from "./DirectMessages";
import { BsEyeFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HStack } from "@chakra-ui/layout";

interface Props {}

const DirectMessagesList: React.FC<Props> = () => {
  const [showConv, setShowConv] = useState(window.location.hash);
  return showConv ? (
    <DirectMessages backToMessages={() => setShowConv(false)} />
  ) : (
    <div
      onClick={() => setShowConv(true)}
      style={{
        cursor: "pointer",
      }}
    >
      <HStack>
        <Message name={"Adam Smith"} time={null}>
          Hey, I'm not real, but you...
        </Message>
        <BsEyeFill />
      </HStack>
      <br />
      <HStack>
        <Message name={"Andrew Taylor"} time={null}>
          Greetings
        </Message>
        <AiOutlineCheckCircle />
      </HStack>
    </div>
  );
};

export default DirectMessagesList;
