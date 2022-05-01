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
import SaveToExcel from "../SaveToExcel";
import SaveToJson from "../SaveToJSON";

const Header = ({ addCol, columns, setColumns, rows, setRows, addRow }) => {
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
            <Text>Columns: {columns.length}</Text>

            <Text>Rows: {rows.length}</Text>

            <Button variant="outline" onClick={addCol}>
              Add column
            </Button>

            <Button variant="outline" onClick={addRow}>
              Add Row
            </Button>

            <SaveToJson rows={rows} columns={columns} />
            <SaveToExcel rows={rows} columns={columns} />
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
