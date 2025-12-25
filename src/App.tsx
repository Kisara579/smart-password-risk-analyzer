import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <>
      <VStack minHeight={"100vh"} justifyContent={"center"} alignContent={"center"}>
        <Stack gap={"0"} textAlign={"center"}>
          <Heading size="3xl" color="teal.600">
            Smart Password Risk Analyzer
          </Heading>
          <Text fontSize="md" color="fg.muted">
            Evaluate the strength and vulnerability of your credentials.
          </Text>
        </Stack>
        <ResultCard />
      </VStack>
    </>
  );
}

export default App;
