import React from "react";
import { Box, Heading, Text, List, ListItem, ListIcon, VStack, Input, Select, Checkbox, Button } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" width="800px" padding="40px" borderRadius="md" boxShadow="md">
        {/* Left Side Content */}
        <Box flex="1" marginRight="40px">
          <Heading as="h2" size="lg" marginBottom="20px">
            What do you get by subscribing to the newsletter?
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Regular updates from the world of product design.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Highly curated list of design articles that give you something to think about.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Tools and resources to learn something new in design.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              One to one feedback on a randomly chosen subscriber's work.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheck} color="green.500" />
              Regular assessment of the skills that are highly valued in the design community.
            </ListItem>
          </List>
        </Box>

        {/* Right Side Content */}
        <Box flex="1">
          <VStack spacing={6} align="stretch">
            <Heading as="h1" size="xl">
              Newsletter Sign up
            </Heading>
            <Text fontSize="md" color="gray.500">
              You are in a good company with 450 other regular subscribers enjoying the content.
            </Text>
            <Input placeholder="Name" size="lg" />
            <Input placeholder="Email" size="lg" />
            <Select placeholder="Frequency" size="lg" defaultValue="monthly">
              <option value="monthly">Monthly</option>
            </Select>
            <Checkbox defaultIsChecked>Yes, I understand and agree to the Terms and Conditions.</Checkbox>
            <Button colorScheme="blue" size="lg">
              SIGN UP
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
