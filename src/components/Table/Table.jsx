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
  const handleRowChange = (val, idx, colIdx) => {
    setRows((prevRows) =>
      prevRows.map((row, id) =>
        idx === id
          ? row.map((col, colId) => (colIdx === colId ? val : col))
          : row
      )
    );
  };
  const handleDelete = (idx) => {
    console.log(idx);
    if (columns.length > 1) {
      setColumns((prev) => prev.filter((_, id) => idx !== id));
    }
    if (rows.length > 0) {
      setRows((prevRows) =>
        prevRows.map((row) => row.filter((_, id) => idx !== id))
      );
    }
  };
  const handleDeleteRow = (idx) => {
    setRows((prevRow) => prevRow.filter((_, id) => idx !== id));
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
                <Button
                  w="full"
                  colorScheme="red"
                  onClick={() => handleDelete(idx)}
                >
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
                    <Input
                      value={rowCol}
                      onChange={(e) =>
                        handleRowChange(e.target.value, idx, rowColIdx)
                      }
                    />
                  </Td>
                ))}
                <Td>
                  <Button
                    variant="outline"
                    colorScheme="red"
                    onClick={() => handleDeleteRow(idx)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableUI;
