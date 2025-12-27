import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { analyzePassword } from "../utils/analyzePassword";
import {
  Card,
  VStack,
  Button,
  Text,
  Box,
  Tooltip as TooltipComponent,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

function ResultCard() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState<{
    score: number;
    issues: string[];
    crackTime: string;
  } | null>(null);

  let riskLabel = "";
  let riskBg = "gray.500";

  if (analysis) {
    if (analysis.score >= 70) {
      riskLabel = "Low Risk";
      riskBg = "green.600";
    } else if (analysis.score >= 40) {
      riskLabel = "Medium Risk";
      riskBg = "orange.600";
    } else {
      riskLabel = "High Risk";
      riskBg = "red.600";
    }
  }

  const issueMessages: Record<string, string> = {
    NO_UPPERCASE: "Add at least one uppercase letter",
    NO_LOWERCASE: "Add at least one lowercase letter",
    NO_NUMBER: "Add at least one number",
    NO_SYMBOL: "Add at least one symbol",
    TOO_SHORT: "Password is too short",
    NO_SPECIAL_CHAR: "Add at least one special character",
    REPEATED_CHARS: "Avoid using repeated characters",
    SEQUENTIAL_PATTERN: "Avoid using sequential characters",
    COMMON_PASSWORD: "Avoid using common passwords",
  };

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
            disabled={!password}
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
            <VStack
              align="start"
              gap={"10px"}
              marginTop={"1rem"}
              bg={"white"}
              padding={"1.5rem"}
              borderWidth={"1px"}
              borderRadius={"10px"}
              borderColor={"gray.300"}
            >
              <Box
                bg={riskBg}
                width={"100%"}
                padding={"0.5rem"}
                borderRadius={"8px"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={"lg"}
                  color={"white"}
                  textAlign={"center"}
                >
                  {riskLabel}
                </Text>
              </Box>
              <Box
                width="100%"
                padding="0.75rem"
                borderRadius="8px"
                bg="gray.100"
              >
                <Text fontWeight="bold">
                  Strength Score:{" "}
                  <Text as="span" color="teal.600">
                    {analysis.score}/100
                  </Text>
                </Text>
              </Box>
              <Box width={"100%"}>
                <Text fontWeight={"bold"} marginBottom={"0.25rem"}>
                  Analyze Details
                </Text>
                <VStack align="start" gap={"1px"}>
                  {analysis.issues.length === 0 ? (
                    <Text color="green.600" fontWeight="bold">
                      No issues found
                    </Text>
                  ) : (
                    analysis.issues.map((issue, index) => (
                      <Text key={index} color="red.600">
                        • {issueMessages[issue] || issue}
                      </Text>
                    ))
                  )}
                </VStack>
              </Box>

              <Box
                width="100%"
                padding="0.75rem"
                borderRadius="8px"
                bg="blue.50"
              >
                <Box display="flex" alignItems="center" gap="6px">
                  <TooltipComponent.Root>
                    <TooltipComponent.Trigger asChild>
                      <Box
                        cursor="pointer"
                        color="blue.600"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        width="1.25rem"
                      >
                        <FiAlertCircle />
                      </Box>
                    </TooltipComponent.Trigger>
                    <TooltipComponent.Positioner>
                      <TooltipComponent.Content>
                        This is an estimate based on brute force cracking
                        techniques.
                      </TooltipComponent.Content>
                    </TooltipComponent.Positioner>
                  </TooltipComponent.Root>

                  <Text fontWeight="bold">
                    Estimated Crack Time:{" "}
                    <Text as="span" color="blue.700">
                      {analysis.crackTime}
                    </Text>
                  </Text>
                </Box>
              </Box>
            </VStack>
          )}
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default ResultCard;
