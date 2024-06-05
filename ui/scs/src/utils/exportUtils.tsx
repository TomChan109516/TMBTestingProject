import  Excel from "exceljs";
import { saveAs } from 'file-saver';


export const exportExcelCSVHandler = async (columns, data, fileName, fileType) => {
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("exportData");
    worksheet.columns = columns;
    worksheet.addRows(data);
    worksheet.getRow(1).font = { bold: true };
    worksheet.columns.forEach((column, index) => {
      if (index === 0) {
        column.width = 18;
      } else if (index === 8) {
        column.width = 20;
      } else if (index === 3) {
        column.width = 28;
      } else {
        column.width = 18;
      }
    });
  
    worksheet.eachRow({ includeEmpty: false }, (row) => {
      const currentCell = row._cells;
      currentCell.forEach((singleCell) => {
        const cellAddress = singleCell._address;
        worksheet.getCell(cellAddress).border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });
    worksheet.eachRow({ includeEmpty: true }, function (row) {
      row.alignment = { vertical: "middle", horizontal: "center" };
    });
    const buf = fileType === "xlsx" ? await workbook.xlsx.writeBuffer() : await workbook.csv.writeBuffer();
    saveAs(new Blob([buf]), `${fileName}.${fileType}`);
  };