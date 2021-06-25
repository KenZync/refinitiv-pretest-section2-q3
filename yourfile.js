const axios = require("axios");
const cheerio = require("cheerio");

async function getFundValue() {
  let response = await axios.get("https://codequiz.azurewebsites.net/", {
    headers: { Cookie: "hasCookie=true" },
  });
  let data = cheerio.load(response.data);

  $ = cheerio.load(response.data);
  for (let i = 0; i < $("table tr").length; i++) {
    let row = $(`table tr`).eq(i);
    if (row.find(`td:nth-of-type(1)`).text().trim() == `${process.argv[2]}`) {
      fundValue = row.find(`td:nth-of-type(2)`).text();
      break;
    }
  }
  console.log(fundValue);
}

getFundValue();
