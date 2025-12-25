import { Field, Input } from "@chakra-ui/react";

function PasswordInput() {
  return (
    <>
      <Field.Root>
        <Input placeholder="Enter Your Password" type="password" />
      </Field.Root>
    </>
  );
}

export default PasswordInput;
