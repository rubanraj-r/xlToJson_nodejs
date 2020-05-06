const fs= require('fs')
    , XLSX = require('xlsx');

function xlToJson(xl, json) {
  return new Promise((resolve, reject) => {
    try {
      var workbook = XLSX.readFile(xl);
      var sheet_name_list = workbook.SheetNames;
      sheet_name_list.map((y) => {
        var worksheet = workbook.Sheets[y];
        var headers = {};
        var data = [];
        for(var z in worksheet) {
          if(z[0] === '!') continue;
          //parse out the column, row, and value
          var col = z.substring(0,1);
          var row = parseInt(z.substring(1));
          var value = worksheet[z].v;

          //store header names
          if(row == 1) {
            headers[col] = value;
            continue;
          }

          if(!data[row]) data[row]={};
          data[row][headers[col]] = value;
        }
        //drop those first two rows which are empty
        data.shift();
        data.shift();
        // console.log(data);
        fs.writeFileSync(json, JSON.stringify(data, null, '\r\n'), 'UTF-8');
        resolve(" `` Converted to JSON `` ");
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = xlToJson;
