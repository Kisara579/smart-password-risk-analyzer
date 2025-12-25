import PasswordInput from "./PasswordInput";
import { Card, VStack, Button } from "@chakra-ui/react";

function ResultCard() {
  return (
    <>
      <Card.Root maxW="sm">
        <Card.Body>
          <PasswordInput />
          <Button>Analyze Risk</Button>

          <VStack>Risk Assessment High Risk</VStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default ResultCard;
