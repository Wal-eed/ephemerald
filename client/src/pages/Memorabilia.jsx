import { Box, Text, Divider, VStack } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "src/components/Tree";
import award from "src/assets/statue.png";
const Memorabilia = () => {
  return (
    <VStack p="1rem">
      <Text fontSize="4xl">Badges</Text>
      <Box w="100%" borderWidth="1px" borderRadius="1rem">
        <Box w="100%" h="sm">
          <Canvas camera={{ position: [100, 100, 100], fov: 90 }}>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </Box>
        <Divider />
        <Text p="1rem" fontSize="2xl" as="strong">
          Tree Badge
        </Text>
        <Text paddingInline="1rem">
          Awarded for participating in the tree planting event!
        </Text>
      </Box>
      <Box w="100%" borderWidth="1px" borderRadius="1rem">
        <img alt="statue" src={award} />
        <Divider />
        <Text p="1rem" fontSize="2xl" as="strong">
          Statue Badge
        </Text>
        <Text paddingInline="1rem">
          Awarded for participating in the statue sculpting event!
        </Text>
      </Box>
    </VStack>
  );
};

export default Memorabilia;
