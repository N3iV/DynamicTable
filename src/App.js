import { Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header/Header";
import TableUI from "./components/Table/Table";

function App() {
  const [columns, setColumns] = useState(["Col 1"]);
  const [rows, setRows] = useState([]);
  const addRow = () => {
    setRows((prvRow) => [...prvRow, columns.map((col) => ``)]);
  };
  const addCol = () => {
    if (columns.length < 5) {
      setColumns((prvCol) => [...prvCol, `Col ${columns.length + 1}`]);
      if (rows.length > 0) {
        console.log("here", rows);
        setRows((prevRow) => prevRow.map((row) => [...row, ""]));
      }
    } else {
      alert("Max 5 col");
    }
  };
  return (
    <Container maxW="container.xl">
      <Header addCol={addCol} />
      <TableUI
        addCol={addCol}
        columns={columns}
        setColumns={setColumns}
        addRow={addRow}
        setRows={setRows}
        rows={rows}
      />
    </Container>
  );
}

export default App;
