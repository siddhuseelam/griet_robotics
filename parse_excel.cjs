const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

try {
  const excelFilePath = path.join(__dirname, 'src', 'assets', 'Id card Detailes (Responses).xlsx');
  const workbook = xlsx.readFile(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  
  const outputFilePath = path.join(__dirname, 'src', 'assets', 'teamData.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(data, null, 2));
  console.log('Successfully wrote to teamData.json');
} catch (error) {
  console.error('Error parsing excel:', error);
}
