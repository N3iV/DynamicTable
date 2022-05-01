import { Button } from "@chakra-ui/react";
import exportFromJSON from "export-from-json";
import { convertDataToJSON } from "../method";

const SaveToExcel = ({ rows, columns }) => {
  const downloadExcelFile = () => {
    const data = convertDataToJSON({ columns, rows });
    const filename = "data";
    const exportType = exportFromJSON.types.xls;
    exportFromJSON({ data, filename, exportType });
  };
  return (
    <Button
      colorScheme="green"
      variant="solid"
      onClick={() => downloadExcelFile()}
    >
      Save to Excel
    </Button>
  );
};

export default SaveToExcel;
