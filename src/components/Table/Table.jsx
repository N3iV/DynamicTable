import {
  Button,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TableUI = ({ addCol, columns, setColumns, rows, setRows, addRow }) => {
  const handleColumnChange = (val, idx) => {
    setColumns((prevColumns) => {
      return prevColumns.map((col, id) => (idx === id ? val : col));
    });
  };

  return (
    <TableContainer mt="20">
      <Table variant="unstyled" colorScheme="linkedin">
        <TableCaption>
          <Button w="full" colorScheme="green" onClick={() => addRow()}>
            Add row
          </Button>
        </TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            {columns?.map((col, idx) => (
              <Th key={idx * 123}>
                <Button w="full" colorScheme="red">
                  Delete
                </Button>
              </Th>
            ))}
          </Tr>
          <Tr style={{ background: "#f3f3f3" }}>
            <Th>Sno.</Th>
            {columns?.map((col, idx) => (
              <Th key={idx}>
                <Input
                  value={col}
                  onChange={(e) => handleColumnChange(e.target.value, idx)}
                />
              </Th>
            ))}

            <Th>
              <Button colorScheme="green" onClick={addCol}>
                Add Col
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.length < 1 ? (
            <Tr>
              <Th colSpan={columns.length + 2}>
                <Text w="full" textAlign="center">
                  Please Click on add row btn to add row
                </Text>
              </Th>
            </Tr>
          ) : (
            rows?.map((row, idx) => (
              <Tr key={idx * 125}>
                <Td>{idx + 1}</Td>
                {row.map((rowCol, rowColIdx) => (
                  <Td key={rowColIdx * 127}>
                    <Input />
                  </Td>
                ))}
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableUI;
