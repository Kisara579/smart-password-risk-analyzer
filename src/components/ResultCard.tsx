import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { analyzePassword } from "../utils/analyzePassword";
import { Card, VStack, Button, Text } from "@chakra-ui/react";

function ResultCard() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState<{
    score: number;
    issues: string[];
  } | null>(null);

  const handleAnalyze = () => {
    const result = analyzePassword(password);
    setAnalysis(result);
  };
  return (
    <>
      <Card.Root maxW="md" width={"100%"}>
        <Card.Body>
          <PasswordInput password={password} setPassword={setPassword} />
          <Button
            bg={"teal.600"}
            marginTop={"0.75rem"}
            width={"100%"}
            size={"lg"}
            color={"white"}
            borderRadius={"10px"}
            _hover={{ bg: "teal.700" }}
            onClick={handleAnalyze}
          >
            Analyze Risk
          </Button>

          {analysis && (
            <VStack align="start" gap={"10px"} margin={"1rem"}>
              <Text>Score: {analysis.score}</Text>
              <Text>Issues: {analysis.issues.join(", ")}</Text>
            </VStack>
          )}
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default ResultCard;
