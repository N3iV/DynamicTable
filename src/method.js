export const convertDataToJSON = (data) => {
  const { rows, columns } = data;
  let convertedData = [];
  rows.map((row, idx) => {
    let obj = { sno: idx + 1 };
    columns.map((column, colId) => {
      obj[column] = row[colId];
    });
    console.log(obj);
    convertedData.push(obj);
  });
  return convertedData;
};
