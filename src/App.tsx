import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <>
      <VStack
        minHeight={"100vh"}
        justifyContent={"center"}
        alignContent={"center"}
        paddingLeft={"10px"}
        paddingRight={"10px"}
        paddingBottom={"10px"}
      >
        <Stack gap={"0"} textAlign={"center"} padding={{base: "0.5rem", md: "1rem"}}>
          <Heading
            size={{ base: "xl", md: "3xl" }}
            color="teal.600"
            letterSpacing={"tight"}
            padding={"0.2rem"}
          >
            Smart Password Risk Analyzer
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="fg.muted">
            Evaluate the strength and vulnerability of your credentials.
          </Text>
        </Stack>
        <ResultCard />
      </VStack>
    </>
  );
}

export default App;
