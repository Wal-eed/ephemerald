import React, { useEffect, useState } from "react";
import "../People.css";
import { Link } from "react-router-dom";
import { ChatIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import {
  chakra,
  Text,
  Image,
  IconButton,
  HStack,
  Box,
  Container,
  Flex,
  Spacer,
  VStack,
  StackDivider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import user7 from "../assets/user7.png";
import user8 from "../assets/user8.png";
import user9 from "../assets/user9.png";
import user10 from "../assets/user10.png";
import user11 from "../assets/user11.png";
import user12 from "../assets/user12.png";
import user13 from "../assets/user13.png";
import user14 from "../assets/user14.png";
import anonymousPic from "../assets/anonymousPic.png";

import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";

interface Props {}

const people = [
  {
    name: "Adam Smith",
    username: "BinChicken",
    pic: user1,
    anonymous: false,
    description: "I'm wearing a green hat. Come say hi :)",
  },
  {
    name: "Romney Crawford",
    username: "SyncsHackerMan1234",
    pic: user2,
    anonymous: true,
    description: "I hacked SYNCS. AMA",
  },
  {
    name: "Sarah Brown",
    username: "Sarahhhhhhhh",
    pic: user3,
    anonymous: false,
    description: "A journey is an adventure",
  },
  {
    name: "Matt King",
    username: "MatTheBat",
    pic: user4,
    anonymous: false,
    description: "Life imitates art... I imitate life",
  },
  {
    name: "Megan Fitzgerald",
    username: "SparklyMegan<333",
    pic: user5,
    anonymous: true,
    description: "All about that base",
  },
  {
    name: "Isabella Lee",
    username: "CameraLover",
    pic: user6,
    anonymous: false,
    description: "Loving my new DSL! Come take pics with me :3",
  },
  {
    name: "Devansh Singh",
    username: "TheMicroProfessor",
    pic: user7,
    anonymous: false,
    description: "Former data61 Distributed Systems Lecturer",
  },
  {
    name: "Lizzie James",
    username: "DizzyLizzy",
    pic: user8,
    anonymous: true,
    description: "Kind of dizzy -_-",
  },
  {
    name: "Watson Holmes",
    username: "200IQGeniusMan",
    pic: user9,
    anonymous: false,
    description: "No crime I can't solve...",
  },
  {
    name: "Lauren Hamilton",
    username: "TravellingNomad1995",
    pic: user10,
    anonymous: true,
    description: "My dream is to go to Spain",
  },
  {
    name: "Vicky Chen",
    username: "PrincessGirl1997",
    pic: user11,
    anonymous: false,
    description: "Remember to put on sunscreen!",
  },
  {
    name: "Finn Bjergsen",
    username: "Bjergsenand4Wards",
    pic: user12,
    anonymous: false,
    description: "TSM TSM TSM",
  },
  {
    name: "Ross Lopez",
    username: "RossAndLopez",
    pic: user13,
    anonymous: false,
    description: "Wow, what a beautiful day!",
  },
  {
    name: "Sam DrinkWater",
    username: "HydroHomieH2O",
    pic: user14,
    anonymous: false,
    description: "CMV: Water is the best drink.",
  },
];

const People: React.FC<Props> = () => {
  const [users, setUsers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [socials, setSocials] = useState({
    name: null,
    pic: null,
    description: null,
  });

  useEffect(() => {
    setUsers(people);
  }, []);

  const openModal = (name, pic, description) => {
    setSocials({
      name: name,
      pic: pic,
      description: description,
    });

    onOpen();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
      // bg="#f8f8f8"
      // maxW="container.lg"
    >
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Image
                objectFit="cover"
                width="42px"
                height="42px"
                borderRadius="42px"
                src={socials["pic"]}
              />
              <Box marginLeft="6px" textAlign="left">
                <Text fontWeight="bold" fontSize="12px">
                  {socials["name"]}
                </Text>

                <Text fontStyle="italic" fontSize="9px" color="#545454">
                  {socials["description"]}
                </Text>
              </Box>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Flex flexDirection="column">
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginBottom="15px"
              >
                <Image
                  objectFit="cover"
                  width="42px"
                  height="42px"
                  src={facebook}
                  marginRight="6px"
                />
                <Text>@facebook_handle</Text>
              </Box>
              <Spacer />
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginBottom="15px"
              >
                <Image
                  objectFit="cover"
                  width="42px"
                  height="42px"
                  marginRight="6px"
                  src={whatsapp}
                />
                <Text>@whatsapp_handle</Text>
              </Box>

              <Spacer />
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginBottom="15px"
              >
                <Image
                  objectFit="cover"
                  width="42px"
                  height="42px"
                  src={instagram}
                  marginRight="6px"
                />
                <Text>@instagram_handle</Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <NavBack number={users.length} />
      <div
        style={{
          marginTop: "40px",
        }}
      />
      {users.map((user, idx) => {
        return (
          <ProfileDisplay
            key={idx}
            name={user.name}
            username={user.username}
            pic={user.pic}
            anonymous={user.anonymous}
            description={user.description}
            openModal={openModal}
          />
        );
      })}
    </div>
  );
};

export default People;

const NavBack = ({ number }) => {
  return (
    // <div
    //   style={{
    //     position: "fixed",
    //     width: "100%",
    //     top: "0",
    //     backgroundColor: "#f8f8f8",
    //   }}
    // >
    //   <div />
    //   <Flex height="40px">
    //     <Box
    //       display="flex"
    //       style={{
    //         alignContent: "flexStart",
    //         justifyContent: "flexStart",
    //       }}
    //       paddingLeft="10px"
    //       // bg="purple"
    //       flex="1"
    //     >
    //       <Link to="/home">
    //         <IconButton
    //           class="iconButton"
    //           colorScheme="whiteAlpha"
    //           aria-label="Back"
    //           icon={<ChevronLeftIcon color="gray.500" />}
    //         />
    //       </Link>
    //     </Box>
    //     <Box
    //       flex="1"
    //       fontSize="14px"
    //       // bg="blue"
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //       color="#008000"
    //     >
    //       {number} Here
    //     </Box>
    //     <Box flex="1" />
    //   </Flex>
    // </div>
    null
  );
};

const ProfileDisplay = ({
  name,
  username,
  pic,
  anonymous,
  description,
  openModal,
}) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    if (anonymous) {
      setUserState({
        name: username,
        pic: anonymousPic,
        anonymous: true,
        description: description,
      });
    } else {
      setUserState({
        name: name,
        pic: pic,
        anonymous: false,
        description: description,
      });
    }
  }, []);

  if (userState === null) {
    return <div />;
  } else {
    return (
      <VStack>
        <Box
          mb="4px"
          h="50px"
          bg="white"
          w="full"
          paddingLeft="6px"
          onClick={() =>
            openModal(
              userState["name"],
              userState["pic"],
              userState["description"]
            )
          }
        >
          <Flex>
            <Box
              // bg="pink"
              w="50px"
              h="50px"
            >
              <Image
                objectFit="cover"
                width="42px"
                height="42px"
                borderRadius="42px"
                margin="4px"
                src={userState["pic"]}
              />
            </Box>
            <Box marginLeft="6px" textAlign="left">
              <Text fontWeight="bold" fontSize="12px">
                {userState["name"]}
              </Text>

              <Text fontStyle="italic" fontSize="10px" color="#545454">
                {userState["description"]}
              </Text>
            </Box>
            <Spacer />
            <Box
              w="50px"
              h="50px"
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              <IconButton
                class="iconButton"
                colorScheme="whiteAlpha"
                aria-label="Direct Message"
                icon={<ChatIcon color="blue" />}
                onClick={() => {
                  alert("Direct Message");
                }}
              />
            </Box>
          </Flex>
        </Box>
      </VStack>
    );
  }
};
