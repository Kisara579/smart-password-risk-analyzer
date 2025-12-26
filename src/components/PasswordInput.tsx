"use client";
import {
  Field,
  Input,
  InputGroup,
  InputElement,
  Button,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { passwordStrength, type Options } from "check-password-strength";
import { useMemo, useState } from "react";
import StrengthIndicator from "./StrengthIndicator";

const strengthOptions: Options<string> = [
  { id: 1, value: "weak", minDiversity: 0, minLength: 0 },
  { id: 2, value: "medium", minDiversity: 2, minLength: 6 },
  { id: 3, value: "strong", minDiversity: 3, minLength: 8 },
  { id: 4, value: "very-strong", minDiversity: 4, minLength: 10 },
];

function PasswordInput() {
  const [show, setshow] = useState(false);
  const [password, setPassword] = useState("");

  const strength = useMemo(() => {
    if (!password) return null;
    return passwordStrength(password, strengthOptions);
  }, [password]);

  return (
    <>
      <Field.Root>
        <Stack width={"100%"}>
          <InputGroup width="100%">
            <Flex flexDirection={"row"} position={"relative"} width="100%">
              <Input
                placeholder="Enter Your Password"
                type={show ? "text" : "password"}
                paddingRight={"5rem"}
                width="100%"
                borderRadius={"10px"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <StrengthIndicator />
        </Stack>
      </Field.Root>
    </>
  );
}

export default PasswordInput;
