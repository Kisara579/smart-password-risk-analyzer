import { Flex, VStack, Text, Box } from "@chakra-ui/react";

function StrengthIndicator() {
  return (
    <>
      <VStack>
        <Flex width={"100%"} gap={"10px"}>
          <Box
            width={"10%"}
            height={"5px"}
            bg={"gray.300"}
            borderRadius={"10px"}
          ></Box>
          <Box
            width={"10%"}
            height={"5px"}
            bg={"gray.300"}
            borderRadius={"10px"}
          ></Box>
          <Box
            width={"10%"}
            height={"5px"}
            bg={"gray.300"}
            borderRadius={"10px"}
          ></Box>
          <Box
            width={"10%"}
            height={"5px"}
            bg={"gray.300"}
            borderRadius={"10px"}
          ></Box>
        </Flex>
        <Text>Weak</Text>
      </VStack>
    </>
  );
}

export default StrengthIndicator;
