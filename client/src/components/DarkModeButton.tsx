import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode: toggleMode } = useColorMode();

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Box>
  );
};
export default DarkModeButton;
