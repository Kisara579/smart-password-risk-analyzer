import PasswordInput from "./PasswordInput";
import { Card, VStack, Button } from "@chakra-ui/react";

function ResultCard() {
  return (
    <>
      <Card.Root maxW="md" width={"100%"}>
        <Card.Body>
          <PasswordInput />
          <Button
            bg={"teal.600"}
            marginTop={"0.75rem"}
            width={"100%"}
            size={"lg"}
            color={"white"}
            borderRadius={"10px"}
            _hover={{ bg: "teal.700" }}
          >
            Analyze Risk
          </Button>

          <VStack>Risk Assessment High Risk</VStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default ResultCard;
