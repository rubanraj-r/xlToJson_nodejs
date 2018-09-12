<h1> xlToJson </h1>

<br />

<span> Developed in JS with ❤ to convert Excel sheet data into Json data </span>
<br />
<br />

<h2> Installation </h2>
<span> npm i xltojson </span>

<h2> How to use </h2>
  <h5><code>
    var xlToJson = require("xltojson");

    xlToJson("tester.xlsx", "tester.json")
    .then(res => console.log(res))
    .catch(err => console.error(err));
  </h5></code>
