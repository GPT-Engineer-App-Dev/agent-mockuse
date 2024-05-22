import { Container, Text, VStack, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Our Website</Text>
        <Text>Explore the features and get to know us better.</Text>
        <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTYyODY4MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Collaboration" boxSize="300px" objectFit="cover" borderRadius="md" />
        <HStack spacing={4}>
          <Button leftIcon={<FaUser />} colorScheme="teal" variant="solid">
            About Us
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
            Contact Us
          </Button>
          <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" colorScheme="teal" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
