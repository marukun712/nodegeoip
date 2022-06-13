const iplocate = require("node-iplocate");
const readline = require("readline");
const asciify = require("asciify");
const countryFlagEmoji = require("country-flag-emoji");

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readInterface.question("ipアドレスを入力してください >", (inputString) => {
  readInterface.close();
  console.log(`入力されたip [${inputString}]`);
  var ip = inputString;
  asciify("result", { font: "larry3d" }, function (err, aa) {
    console.log(aa);
  });

  iplocate(ip).then(function (results) {
    const emoji = countryFlagEmoji.get(results.country_code);

    console.log(
      "---------------------------------------------------------------------"
    );
    console.log("IP Address: " + results.ip);
    console.log(
      "Country: " + results.country + " (" + results.country_code + ")"
    );
    console.log("Country Emoji: " + emoji.emoji + " (" + emoji.unicode + ")");
    console.log("Continent: " + results.continent);
    console.log("Organisation: " + results.org + " (" + results.asn + ")");
    console.log(JSON.stringify(results, null, 2));
    console.log(
      `Googlemap https://www.google.com/maps?q=${results.latitude},${results.longitude}`
    );
    console.log(
      "---------------------------------------------------------------------"
    );
  });
});
