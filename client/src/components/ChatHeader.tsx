import {
  Avatar,
  Button,
  chakra,
  CloseButton,
  Flex,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import DarkModeButton from "./DarkModeButton";
import logo from "src/assets/logo.png";

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
      zIndex={12}
    >
      <Button w="full" variant="ghost" onClick={profileNav.onClose}>
        <CloseButton aria-label="Close menu" justifySelf="self-start" />
      </Button>

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
      <chakra.header
        // h="full"
        h="80px"
        p="100px"
        bg={"green.300"}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        zIndex={-1}
      >
        <Flex
          h="100%"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          style={{ position: "relative", top: "-9px" }}
        >
          <Link display="flex" alignItems="center" href="/home">
            <img style={{ width: "40px" }} src={logo} />
            <Text style={{ color: "white", fontWeight: "bold" }}>
              EPHEMERALD
            </Text>
          </Link>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            // onClick={profileNav.onOpen}
          />
        </Flex>
        {ProfileNavContent}
      </chakra.header>
    </React.Fragment>
  );
}
