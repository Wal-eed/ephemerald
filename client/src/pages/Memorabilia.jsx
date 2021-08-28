import { Box, Text, Divider, VStack } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "src/components/Tree";

const Memorabilia = () => {
  return (
    <VStack p="1rem">
      <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Canvas camera={{ position: [-100, 200, -100], fov: 90 }}>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
        <Divider />
        <Text fontSize="2xl" as="strong" p="6">
          Tree Badge
        </Text>
      </Box>
    </VStack>
  );
};

export default Memorabilia;
