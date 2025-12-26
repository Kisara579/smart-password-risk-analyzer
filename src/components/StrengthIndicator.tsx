import { Flex, VStack, Text, Box } from "@chakra-ui/react";

interface StrengthProps {
  strength?: {
    value: "weak" | "medium" | "strong" | "very-strong";
    id: number;
  };
}

function StrengthIndicator({ strength }: StrengthProps) {
  let fillcolor: string;
  if (!strength) {
    fillcolor = "gray.300";
  } else if (strength.value === "weak") {
    fillcolor = "red.400";
  } else if (strength.value === "medium") {
    fillcolor = "orange.400";
  } else if (strength.value === "strong") {
    fillcolor = "green.400";
  } else if (strength.value === "very-strong") {
    fillcolor = "green.400";
  }
  return (
    <>
      <VStack>
        <Flex width={"100%"} gap={"10px"} alignItems={"center"} height={"10px"}>
          {[1, 2, 3, 4].map((block) => (
            <Box
              key={block}
              width={"calc((100%)/10)"}
              height={"5px"}
              bg={strength && strength.id >= block ? fillcolor : "gray.300"}
              borderRadius={"10px"}
            />
          ))}

          <Text marginLeft={"auto"}>{strength ? strength.value : ""}</Text>
        </Flex>
      </VStack>
    </>
  );
}

export default StrengthIndicator;
