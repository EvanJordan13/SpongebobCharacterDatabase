"use client";

import { Center, Image, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface HomeProps {
  children?: ReactNode;
}

const HomePage: React.FC<HomeProps> = ({ children }) => {
  return (
    <Center minH="100vh" bgColor="#131616">
      <Image
        top={0}
        linear-gradient="(135deg, #50A68480 30%, #115E6780 90%)"
        w="100%"
        h="100%"
        position="absolute"
        src="/krust-krab-background.webp"
        alt="Krusty Krab Wallpaper"
      />
      <VStack gap={5} w="45%" pt="2%" pb="5%">
        <Image
          position="relative"
          w="45%"
          src="/spongebob-png-title-logo-1.png"
          alt="Spongebob Logo"
        />
      </VStack>
    </Center>
  );
};

export default HomePage;
