import {
  Avatar,
  Button,
  chakra,
  CloseButton,
  Flex,
  Link,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import DarkModeButton from "./DarkModeButton";

export default function WfWf(props) {
  const bg = useColorModeValue("white", "gray.800");
  const profileNav = useDisclosure();

  const ProfileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={profileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={profileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Map
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/">
            {/* <Logo /> */}
            <p>Title</p>
          </Link>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            onClick={profileNav.onOpen}
          />
        </Flex>
        {ProfileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}
