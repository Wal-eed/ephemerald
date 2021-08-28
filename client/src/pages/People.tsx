import React, { useEffect, useState } from "react";
import "../People.css";
import { ChatIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { chakra, Text, Image, IconButton, HStack, Box, Container, Flex, Spacer, VStack, StackDivider } from "@chakra-ui/react";
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

interface Props { }

const people = [
    {
        name: "Adam Smith",
        username: "BinChicken",
        pic: user1,
        anonymous: false,
        description: "I'm wearing a green hat. Come say hi :)"
    },
    {
        name: "Romney Crawford",
        username: "SyncsHackerMan1234",
        pic: user2,
        anonymous: true,
        description: "I hacked SYNCS. AMA"
    },
    {
        name: "Sarah Brown",
        username: "Sarahhhhhhhh",
        pic: user3,
        anonymous: false,
        description: "A journey is an adventure"
    },
    {
        name: "Matt King",
        username: "MatTheBat",
        pic: user4,
        anonymous: false,
        description: "Life imitates art... I imitate life"
    },
    {
        name: "Megan Fitzgerald",
        username: "SparklyMegan<333",
        pic: user5,
        anonymous: true,
        description: "All about that base"
    },
    {
        name: "Isabella Lee",
        username: "CameraLover",
        pic: user6,
        anonymous: false,
        description: "Loving my new DSL! Come take pics with me :3"
    },
    {
        name: "Devansh Singh",
        username: "TheMicroProfessor",
        pic: user7,
        anonymous: false,
        description: "Former data61 Distributed Systems Lecturer"
    },
    {
        name: "Lizzie James",
        username: "DizzyLizzy",
        pic: user8,
        anonymous: true,
        description: "Kind of dizzy -_-"
    },
    {
        name: "Watson Holmes",
        username: "200IQGeniusMan",
        pic: user9,
        anonymous: false,
        description: "No crime I can't solve..."
    },
    {
        name: "Lauren Hamilton",
        username: "TravellingNomad1995",
        pic: user10,
        anonymous: true,
        description: "My dream is to go to Spain"
    },
    {
        name: "Vicky Chen",
        username: "PrincessGirl1997",
        pic: user11,
        anonymous: false,
        description: "Remember to put on sunscreen!"
    },
    {
        name: "Finn Bjergsen",
        username: "Bjergsenand4Wards",
        pic: user12,
        anonymous: false,
        description: "TSM TSM TSM"
    },
    {
        name: "Ross Lopez",
        username: "RossAndLopez",
        pic: user13,
        anonymous: false,
        description: "Wow, what a beautiful day!"
    },
    {
        name: "Sam DrinkWater",
        username: "HydroHomieH2O",
        pic: user14,
        anonymous: false,
        description: "CMV: Water is the best drink."
    }
]

const People: React.FC<Props> = () => {

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
            <NavBack />
            {people.map((user, idx) => {
                return (<ProfileDisplay key={idx} name={user.name} username={user.username} pic={user.pic} anonymous={user.anonymous} description={user.description} />)
            })}
        </div>
    );
};

export default People;

const NavBack = () => {
    return (
        <div>
            <div />
            <Flex>
                <Box
                    display="flex"
                    style={{
                        alignContent: "flexStart",
                        justifyContent: "flexStart"
                    }}
                    // bg="purple"
                    flex="1"
                >
                    <IconButton
                        class="iconButton"
                        colorScheme="whiteAlpha"
                        aria-label="Back"
                        icon={<ChevronLeftIcon
                            color="gray.500"
                        />}
                        onClick={() => {
                            alert("GoBack");
                        }}
                    />
                </Box>
                <Box
                    flex="1"
                    fontSize="14px"
                >
                    14 Here
                </Box>
                <Box flex="1" />
            </Flex>
        </div>
    )
}

const ProfileDisplay = ({ name, username, pic, anonymous, description }) => {
    const [userState, setUserState] = useState({});

    useEffect(() => {
        if (anonymous) {
            setUserState({
                "name": username,
                "pic": anonymousPic,
                "anonymous": true,
                "description": description
            });
        } else {
            setUserState({
                "name": name,
                "pic": pic,
                "anonymous": false,
                "description": description
            });
        }
    }, []);

    return (
        <VStack
            spacing={2}
            divider={<StackDivider borderColor="black" />}
        >
            <Box
                mb="2px"
                h="44px"
                bg="white"
                w="full"
                paddingLeft="6px"
                onClick={() => {
                    alert("Clicked on " + userState["name"]);
                }}
            >
                <Flex
                // bg="yellow"
                >
                    <Box
                        // bg="pink"
                        w="44px"
                        h="44px"
                    >
                        <Image
                            objectFit="cover"
                            width="36px"
                            height="36px"
                            borderRadius="36px"
                            margin="4px"
                            src={userState["pic"]}
                        />
                    </Box>
                    <Box
                        marginLeft="6px"
                        textAlign="left"
                    >
                        <Text
                            fontWeight="bold"
                            fontSize="10px"
                        >
                            {userState["name"]}
                        </Text>

                        <Text
                            fontStyle="italic"
                            fontSize="8px"
                            color="#545454"
                        >
                            {userState["description"]}
                        </Text>
                    </Box>
                    <Spacer />
                    <Box
                        w="44px"
                        h="44px"
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                    >
                        <IconButton
                            class="iconButton"
                            colorScheme="whiteAlpha"
                            aria-label="Direct Message"
                            icon={<ChatIcon
                                color="blue"
                            />}
                            onClick={() => {
                                alert("Direct Message");
                            }}
                        />
                    </Box>
                </Flex>
            </Box>
        </VStack>
    )
}