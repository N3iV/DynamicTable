import { Button } from "@chakra-ui/react";
import { convertDataToJSON } from "../method";

const SaveToJson = ({ rows, columns }) => {
  const downloadJSONfile = () => {
    const data = convertDataToJSON({ columns, rows });
    const fileData = JSON.stringify(data);
    const fileBlob = new Blob([fileData], { type: "text/plain" });
    const fileURL = URL.createObjectURL(fileBlob);
    const a = document.createElement("a");
    a.href = fileURL;
    a.download = `data.json`;
    a.click();
  };
  return (
    <Button
      colorScheme="green"
      variant="solid"
      onClick={() => downloadJSONfile()}
    >
      Save to JSON
    </Button>
  );
};

export default SaveToJson;
