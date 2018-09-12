<h1> xlToJson </h1>

<br />

<span> Developed in JS with ❤ to convert Excel sheet data into Json data </span>
<br />
<br />

<h2> How to use <h2>

  var xlToJson = require("xltojson");

  xlToJson("tester.xlsx", "tester.json")
  .then(res => console.log(res))
  .catch(err => console.error(err));
