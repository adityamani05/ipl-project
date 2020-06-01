const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear = require("./ipl/matchesWonPerYear");
const extraRuns = require("./ipl/extraRuns");
const economicalBowlers = require("./ipl/economicalBowlers")
const matchVenue = require("./ipl/matchVenue")

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
      //console.log(deliveries[0], matches[0], "matches-deliveries");
      let result = matchesPlayedPerYear(matches);
      let result1 = matchesWonPerYear(matches);
      let result2 = extraRuns(matches,deliveries);
      let result3 = economicalBowlers(deliveries,matches);
      let result4 = matchVenue(matches);
      //console.log(Object.keys(result4));
      //setTimeout(() => { saveMatchesPlayedPerYear(result,result1,result2); }, 30000);
      saveMatchesPlayedPerYear(result,result1,result2,result3,result4);
    });
    });
}


function saveMatchesPlayedPerYear(result,result1,result2,result3,result4) {
  //let jsonData = {}
  
   const jsonData = {
    matchesPlayedPerYear : result,
    matchesWonPerYear : result1,
    extraRun : result2,
    economicalBowler : result3,
    matchVenue : result4
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString+"\r\n", err => {
    if (err) {
      console.error(err);
    }
  });
  

}

main();
