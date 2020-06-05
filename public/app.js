function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

function start()
{
  document.querySelector(".year-input-button")
  .addEventListener("click",fetchAndRenderEconomyRatesForYear)
}
function fetchAndRenderEconomyRatesForYear(e)
{
  var t = document.querySelector(".year-input").value;
  var year = parseInt(t);
  if(year < 2008 || 2019 < year)
  {
    document.querySelector(".input-container > .error").classList.value="error";
  }
  else
  {
    document.querySelector(".input-container > .error").classList="error invisible";
    //fetch("./data.json").then(r => r.json())
    fetch("./data.json")
    .then(function(e){return e.json()})
    .then(function(e){document.querySelector("#economical-bowlers-given-year").innerHTML="",
    //console.log(e);
    visualizeDataforGivenYear(year,e);
    })
  //(t=parseInt(t))<2008||2019<t?document.querySelector(".input-container > .error").classList.value="error":(document.querySelector(".input-container > .error").classList="error invisible",console.log(t))
}
}
start();
fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeWonPerYear(data.matchesWonPerYear);
  visualizeExtraRun(data.extraRun);
  visualizeEconomicalBowlers(data.economicalBowler);
  visualizeMatchVenue(data.matchVenue);
  return;
}
function visualizeDataforGivenYear(year,data)
{
  //console.log(data.economicalBowlerAllSeason[year]);
  plotdataforgivenyear(data.economicalBowlerAllSeason[year],year);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
function visualizeWonPerYear(matchesWonPerYear)
{
  let seasons = Object.keys(matchesWonPerYear);
  //let seriesData = [];
  const kolkataKnightRiders = [];
  const royalChallengersBangalore = [];
  const chennaiSuperKings = [];
  const KingsXIPunjab = [];
  const DelhiDaredevils = [];
  const RajasthanRoyals = [];
  const MumbaiIndians = [];
  const DeccanChargers = [];
  const KochiTuskersKerala = [];
  const PuneWarriors = [];
  const SunrisersHyderabad = [];
  const RisingPuneSupergiants = [];
  const GujaratLions = [];
  for(let year in matchesWonPerYear)
  {
    (matchesWonPerYear[year]["Kolkata Knight Riders"])?kolkataKnightRiders.push(matchesWonPerYear[year]["Kolkata Knight Riders"]):kolkataKnightRiders.push(0);
    (matchesWonPerYear[year]["Royal Challengers Bangalore"])?royalChallengersBangalore.push(matchesWonPerYear[year]["Royal Challengers Bangalore"]):royalChallengersBangalore.push(0);
    (matchesWonPerYear[year]["Chennai Super Kings"])?chennaiSuperKings.push(matchesWonPerYear[year]["Chennai Super Kings"]):chennaiSuperKings.push(0);
    (matchesWonPerYear[year]["Kings XI Punjab"])?KingsXIPunjab.push(matchesWonPerYear[year]["Kings XI Punjab"]):KingsXIPunjab.push(0);
    (matchesWonPerYear[year]["Delhi Daredevils"])?DelhiDaredevils.push(matchesWonPerYear[year]["Delhi Daredevils"]):DelhiDaredevils.push(0);
    (matchesWonPerYear[year]["Rajasthan Royals"])?RajasthanRoyals.push(matchesWonPerYear[year]["Rajasthan Royals"]):RajasthanRoyals.push(0);
    (matchesWonPerYear[year]["Mumbai Indians"])?MumbaiIndians.push(matchesWonPerYear[year]["Mumbai Indians"]):MumbaiIndians.push(0);
    (matchesWonPerYear[year]["Deccan Chargers"])?DeccanChargers.push(matchesWonPerYear[year]["Deccan Chargers"]):DeccanChargers.push(0);
    (matchesWonPerYear[year]["Kochi Tuskers Kerala"])?KochiTuskersKerala.push(matchesWonPerYear[year]["Kochi Tuskers Kerala"]):KochiTuskersKerala.push(0);
    (matchesWonPerYear[year]["Pune Warriors"])?PuneWarriors.push(matchesWonPerYear[year]["Pune Warriors"]):PuneWarriors.push(0);
    (matchesWonPerYear[year]["Sunrisers Hyderabad"])?SunrisersHyderabad.push(matchesWonPerYear[year]["Sunrisers Hyderabad"]):SunrisersHyderabad.push(0);
    (matchesWonPerYear[year]["Rising Pune Supergiants"])?RisingPuneSupergiants.push(matchesWonPerYear[year]["Rising Pune Supergiants"]):RisingPuneSupergiants.push(0);
    (matchesWonPerYear[year]["Gujarat Lions"])?GujaratLions.push(matchesWonPerYear[year]["Gujarat Lions"]):GujaratLions.push(0);
  }
  //console.log(kolkataKnightRiders);
  Highcharts.chart('matches-won-per-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches won per year'
    },subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: "Kolkata Knight Riders",
        data: kolkataKnightRiders

    }, {
        name: 'Royal Challengers Bangalore',
        data: royalChallengersBangalore

    }, {
        name: 'Chennai Super Kings',
        data: chennaiSuperKings

    }, {
        name: 'Kings XI Punjab',
        data: KingsXIPunjab

    }, {
      name: 'Delhi Daredevils',
      data: DelhiDaredevils

  }, {
      name: 'Rajasthan Royals',
      data: RajasthanRoyals

  },{
    name: 'Mumbai Indians',
    data: MumbaiIndians

}, {
    name: 'Deccan Chargers ',
    data: DeccanChargers

},{
   name : 'Kochi Tuskers Kerala',
   data: KochiTuskersKerala
},{
  name: 'PuneWarriors',
  data: PuneWarriors
}, {
  name: 'Sunrisers Hyderabad',
  data: SunrisersHyderabad

},{
 name : 'Rising Pune Supergiants',
 data: RisingPuneSupergiants
},{
name: 'Gujarat Lions',
data: GujaratLions
}]
});
}

// 3rd function

function visualizeExtraRun(extraRun) {
  const seriesData = [];
  for (let team in extraRun) {
    seriesData.push([team, extraRun[team]]);
  }

  Highcharts.chart("extra-run", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra run in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}
//function to visualize economical bowler
function visualizeEconomicalBowlers(economicalBowlers)
{
    const seriesData = [];
    let i = 0;
    for (let bowler in economicalBowlers) {
      seriesData.push([economicalBowlers[i]["bowler"], economicalBowlers[i]["economy"]]);
      i++;
    }
    //console.log(economicalBowlers[0]["bowler"], economicalBowlers[0]["economy"]);
    //console.log(seriesData);
    Highcharts.chart("economical-bowlers", {
        chart: {
          type: "column"
        },
        title: {
          text: "Economical Bowler in 2015"
        },
        subtitle: {
          text:
            'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          min: 0,
          title: {
            text: "Economy"
          }
        },
        series: [
          {
            name: "bowlers",
            data: seriesData
          }
        ]
      });

}
// function for visualize the match venue
function visualizeMatchVenue(matchVenue)
{
  const kolkataKnightRiders = [];
  const royalChallengersBangalore = [];
  const chennaiSuperKings = [];
  const KingsXIPunjab = [];
  const DelhiDaredevils = [];
  const RajasthanRoyals = [];
  const MumbaiIndians = [];
  const DeccanChargers = [];
  const KochiTuskersKerala = [];
  const PuneWarriors = [];
  const SunrisersHyderabad = [];
  const RisingPuneSupergiants = [];
  const GujaratLions = [];
  for(let venue in matchVenue)
  {
    (matchVenue[venue]["Sunrisers Hyderabad"])?SunrisersHyderabad.push(matchVenue[venue]["Sunrisers Hyderabad"]):SunrisersHyderabad.push(0);
    (matchVenue[venue]["Royal Challengers Bangalore"])?royalChallengersBangalore.push(matchVenue[venue]["Royal Challengers Bangalore"]):royalChallengersBangalore.push(0);
    (matchVenue[venue]["Kolkata Knight Riders"])?kolkataKnightRiders.push(matchVenue[venue]["Kolkata Knight Riders"]):kolkataKnightRiders.push(0);
    (matchVenue[venue]["Chennai Super Kings"])?chennaiSuperKings.push(matchVenue[venue]["Chennai Super Kings"]):chennaiSuperKings.push(0);
    (matchVenue[venue]["Delhi Daredevils"])?DelhiDaredevils.push(matchVenue[venue]["Delhi Daredevils"]):DelhiDaredevils.push(0);
    (matchVenue[venue]["Rajasthan Royals"])?RajasthanRoyals.push(matchVenue[venue]["Rajasthan Royals"]):RajasthanRoyals.push(0);
    (matchVenue[venue]["Kings XI Punjab"])?KingsXIPunjab.push(matchVenue[venue]["Kings XI Punjab"]):KingsXIPunjab.push(0);
    (matchVenue[venue]["Mumbai Indians"])?MumbaiIndians.push(matchVenue[venue]["Mumbai Indians"]):MumbaiIndians.push(0);
    (matchVenue[venue]["Deccan Chargers"])?DeccanChargers.push(matchVenue[venue]["Deccan Chargers"]):DeccanChargers.push(0);
    (matchVenue[venue]["Kochi Tuskers Kerala"])?KochiTuskersKerala.push(matchVenue[venue]["Kochi Tuskers Kerala"]):KochiTuskersKerala.push(0);
    (matchVenue[venue]["Pune Warriors"])?PuneWarriors.push(matchVenue[venue]["Pune Warriors"]):PuneWarriors.push(0);
    (matchVenue[venue]["Rising Pune Supergiants"])?RisingPuneSupergiants.push(matchVenue[venue]["Rising Pune Supergiants"]):RisingPuneSupergiants.push(0);
    (matchVenue[venue]["Gujarat Lions"])?GujaratLions.push(matchVenue[venue]["Gujarat Lions"]):GujaratLions.push(0);
 
  }

  Highcharts.chart('matches-venue', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches won by each team per venue'
    },
    xAxis: {
        categories: [ 'Rajiv Gandhi International Stadium, Uppal',
        'Maharashtra Cricket Association Stadium',
        'Saurashtra Cricket Association Stadium',
        'Holkar Cricket Stadium',
        'M Chinnaswamy Stadium',
        'Wankhede Stadium',
        'Eden Gardens',
        'Feroz Shah Kotla',
        'Punjab Cricket Association IS Bindra Stadium, Mohali',
        'Green Park',
        'Punjab Cricket Association Stadium, Mohali',
        'Sawai Mansingh Stadium',
        'MA Chidambaram Stadium, Chepauk',
        'Dr DY Patil Sports Academy',
        'Newlands',
        'St George\'s Park',
        'Kingsmead',
        'SuperSport Park',
        'Buffalo Park',
        'New Wanderers Stadium',
        'De Beers Diamond Oval',
        'OUTsurance Oval',
        'Brabourne Stadium',
        'Sardar Patel Stadium, Motera',
        'Barabati Stadium',
        'Vidarbha Cricket Association Stadium, Jamtha',
        'Himachal Pradesh Cricket Association Stadium',
        'Nehru Stadium',
        'Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium',
        'Subrata Roy Sahara Stadium',
        'Shaheed Veer Narayan Singh International Stadium',
        'JSCA International Stadium Complex',
        'Sheikh Zayed Stadium',
        'Sharjah Cricket Stadium',
         'Dubai International Cricket Stadium',
        'M. A. Chidambaram Stadium',
        'Feroz Shah Kotla Ground',
        'M. Chinnaswamy Stadium',
        'Rajiv Gandhi Intl. Cricket Stadium',
        'IS Bindra Stadium',
        'ACA-VDCA Stadium' 
      ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total matches'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series:  [{
      name: "Kolkata Knight Riders",
      data: kolkataKnightRiders

  }, {
      name: 'Royal Challengers Bangalore',
      data: royalChallengersBangalore

  }, {
      name: 'Chennai Super Kings',
      data: chennaiSuperKings

  }, {
      name: 'Kings XI Punjab',
      data: KingsXIPunjab

  }, {
    name: 'Delhi Daredevils',
    data: DelhiDaredevils

}, {
    name: 'Rajasthan Royals',
    data: RajasthanRoyals

},{
  name: 'Mumbai Indians',
  data: MumbaiIndians

}, {
  name: 'Deccan Chargers ',
  data: DeccanChargers

},{
 name : 'Kochi Tuskers Kerala',
 data: KochiTuskersKerala
},{
name: 'PuneWarriors',
data: PuneWarriors
}, {
name: 'Sunrisers Hyderabad',
data: SunrisersHyderabad

},{
name : 'Rising Pune Supergiants',
data: RisingPuneSupergiants
},{
name: 'Gujarat Lions',
data: GujaratLions
}]
});
}
// plot for economical bowlers in given year
function plotdataforgivenyear(economicalBowlers,year)
{
  //console.log(economicalBowlers);
  const seriesData = [];
  let i = 0;
  for (let bowler in economicalBowlers) {
    seriesData.push([economicalBowlers[i]["bowler"], economicalBowlers[i]["economy"]]);
    i++;
  }
  //console.log(economicalBowlers[0]["bowler"], economicalBowlers[0]["economy"]);
  //console.log(seriesData);
  Highcharts.chart("economical-bowlers-given-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Economical Bowler in " + year
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "bowlers",
          data: seriesData
        }
      ]
    });
}