# xlToJson

*Developed in JS with ❤ to convert Excel sheet data into Json data*


## Installation
```
npm i xltojson --save
```

## How to use
```
var xlToJson = require("xltojson");

xlToJson("tester.xlsx", "tester.json")
  .then(res => console.log(res))
  .catch(err => console.error(err));
```
