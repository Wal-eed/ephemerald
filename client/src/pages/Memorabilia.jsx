import { Box, Text, Divider, VStack } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "src/components/Tree";

const Memorabilia = () => {
  return (
    <VStack p="1rem">
      <Text fontSize="4xl">Badges</Text>
      <Box w="100%" borderWidth="1px" borderRadius="1rem">
        <Box w="100%" h="md">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt
          dolores eligendi ullam veritatis, debitis deserunt, distinctio
          officiis esse eos voluptatem ex odit labore odio illum hic aliquid!
          Tempora, consequuntur quas iure deleniti vitae sed expedita esse
          consectetur autem delectus quod nam eaque praesentium, cum temporibus
          ipsam, eius dolore ea?
        </Text>
      </Box>
    </VStack>
  );
};

export default Memorabilia;
