import {
  Field,
  Input,
  InputGroup,
  InputElement,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

function PasswordInput() {
  const [show, setshow] = useState(false);
  return (
    <>
      <Field.Root>
        <InputGroup width="100%">
          <Flex flexDirection={"row"} position={"relative"} width="100%">
            <Input
              placeholder="Enter Your Password"
              type={show ? "text" : "password"}
              paddingRight={"5rem"}
              width="100%"
              borderRadius={"10px"}
            />
            <InputElement width="4.5rem" right="0.2rem">
              <Button
                bg={"gray.300"}
                height={"1.75rem"}
                size="sm"
                color={"black"}
                onClick={() => setshow(!show)}

              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputElement>
          </Flex>
        </InputGroup>
      </Field.Root>
    </>
  );
}

export default PasswordInput;
