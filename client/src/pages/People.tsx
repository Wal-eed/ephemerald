import React from "react";
import { chakra, Image, HStack, Box, Container, Avatar, Circle } from "@chakra-ui/react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";

interface Props { }

const People: React.FC<Props> = () => {
    const people = [
        {
            name: "Adam Smith",
            pic: user1
        },
        {
            name: "Romney Crawford",
            pic: user2
        },
        {
            name: "Sarah Brown",
            pic: user3
        },
        {
            name: "Matt King",
            pic: user4
        },
        {
            name: "Megan Fitzgerald",
            pic: user5
        },
        {
            name: "Isabella Lee",
            pic: user6
        }
    ]

    return (
        <Container
            maxH="100%"
            bg="green"
        >
            {people.map((user, idx) => {
                return (<ProfileDisplay key={idx} name={user.name} pic={user.pic} />)
            })}
        </Container>
    );
};

export default People;

const ProfileDisplay = ({ name, pic }) => {
    return (
        <Box
            bg="tomato"
            ml={10}
            mr={10}
            mt={2}
            mb={2}
            h="36px"
            w="full"
        >
            <HStack
                spacing={20}
            >
                <Box
                    bg="pink"
                    w="36px"
                    h="36px"
                >
                    <Image
                        // CENTER THIS fkme
                        objectFit="cover"
                        width="28px"
                        height="28px"
                        borderRadius="28px"
                        margin="4px"
                        src={pic}
                    />
                </Box>

                <Box>
                    {name}
                </Box>
            </HStack>
        </Box>
    )
}