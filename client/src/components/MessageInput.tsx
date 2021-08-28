import { Input, InputGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { IMessage } from "src/pages/Messages";

interface IProps {
  channel: string;
  onEnterPressed: (value: IMessage) => void;
}

const MessageInput: React.FC<IProps> = ({ channel, onEnterPressed }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <InputGroup size="md">
      <Input
        value={value}
        onChange={handleChange}
        placeholder={`Message ${channel}`}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            const time = new Date(Date.now());
            onEnterPressed({
              text: value,
              name: "Test User",
              time: time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            });
            setValue("");
          }
        }}
      />
    </InputGroup>
  );
};

export default MessageInput;
