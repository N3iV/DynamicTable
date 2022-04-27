import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      mt="12"
      minWidth="max-content"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading as="h4" size="lg">
        Dynamic Table
      </Heading>

      <Box m="2" w="auto" h="10">
        <Flex alignItems="center">
          <Stack direction="row" spacing={4} align="center">
            <Text>Columns: 2</Text>

            <Text>Rows: 1</Text>

            <Button variant="outline">Add column</Button>

            <Button variant="outline">Add Row</Button>

            <Button colorScheme="green" variant="solid">
              Save to JSON
            </Button>
            <Button colorScheme="green" variant="solid">
              Save to Excel
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
