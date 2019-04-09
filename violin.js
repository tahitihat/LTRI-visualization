// Some code derived from example: https://www.d3-graph-gallery.com/graph/violin_basicHist.html
// Some code derived from example: https://bl.ocks.org/patiencehaggin/ffc6522a844cea9f0712282ba6d3cbeb

const IndicatorMap = {
  "Burkina Faso Q45":
    { "I1_Scr": 1, "I2_Scr": 1, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 1, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.4 },
  "Burkina Faso Q46":
    { "I1_Scr": 1, "I2_Scr": 1, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 1, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.4 },
  "Cameroon Q45":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 2.9 },
  "Cameroon Q46":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 2.9 },
  "Cote d'Ivoire Q45":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
  "Cote d'Ivoire Q46":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
  "Liberia Q45":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 2, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 3, "I8_Scr": 1, "I9_Scr": 1, "I10_Scr": 3, "Avg_Scr": 2.3 },
  "Liberia Q46":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 3, "I4_Scr": 2, "I5_Scr": 2, "I6_Scr": 2, "I7_Scr": 3, "I8_Scr": 1, "I9_Scr": 1, "I10_Scr": 3, "Avg_Scr": 2.3 },
  "Madagascar Q45":
    { "I1_Scr": 3, "I2_Scr": 4, "I3_Scr": 2, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 3.0 },
  "Madagascar Q46":
    { "I1_Scr": 3, "I2_Scr": 4, "I3_Scr": 2, "I4_Scr": 3, "I5_Scr": 3, "I6_Scr": 3, "I7_Scr": 3, "I8_Scr": 3, "I9_Scr": 3, "I10_Scr": 3, "Avg_Scr": 3.0 },
  "Mozambique Q45":
    { "I1_Scr": 1, "I2_Scr": 2, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 3, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.7 },
  "Mozambique Q46":
    { "I1_Scr": 1, "I2_Scr": 2, "I3_Scr": 1, "I4_Scr": 1, "I5_Scr": 3, "I6_Scr": 1, "I7_Scr": 3, "I8_Scr": 2, "I9_Scr": 1, "I10_Scr": 2, "Avg_Scr": 1.7 },
  "Rwanda Q45":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 2, "I4_Scr": 4, "I5_Scr": 4, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 1, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
  "Rwanda Q46":
    { "I1_Scr": 3, "I2_Scr": 3, "I3_Scr": 2, "I4_Scr": 4, "I5_Scr": 4, "I6_Scr": 2, "I7_Scr": 4, "I8_Scr": 1, "I9_Scr": 2, "I10_Scr": 3, "Avg_Scr": 2.8 },
  "Zambia Q45":
    { "I1_Scr": 2, "I2_Scr": 1, "I3_Scr": 3, "I4_Scr": 4, "I5_Scr": 2, "I6_Scr": 1, "I7_Scr": 2, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 2, "Avg_Scr": 2.1 },
  "Zambia Q46":
    { "I1_Scr": 2, "I2_Scr": 1, "I3_Scr": 3, "I4_Scr": 4, "I5_Scr": 2, "I6_Scr": 1, "I7_Scr": 2, "I8_Scr": 2, "I9_Scr": 2, "I10_Scr": 2, "Avg_Scr": 2.1 }
};

var margin = { top: 10, right: 30, bottom: 30, left: 40 },
  width = 1025 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append svg object to page
var svg = d3.select("#violin")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Build y scale
var y = d3.scaleLinear()
  .domain([0, 6])
  .range([height, 0]);

svg.append("g").call(d3.axisLeft(y));

// array of countries to plot
allCountries = ["Burkina Faso Q45", "Burkina Faso Q46", "Cameroon Q45", "Cameroon Q46"];

// Build x scale
let x;

// Histogram
var histogram = d3.histogram()
  .domain(y.domain())
  .thresholds(y.ticks(20)) // resolution
  .value(d => d);

function buildxScale() {
  x = d3.scaleBand()
    .range([0, width])
    .domain(allCountries)
    .padding(0.05);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
}

function drawGraph(sumstat, xNum, indicator, question) {
  svg
    .selectAll("myViolin")
    .data(sumstat)
    .enter()
    .append("g")
    .filter(function (d) {
      return allCountries.indexOf(d.key) > -1; // filter by selected countries
    })
    .attr("transform", function (d) {
      return ("translate(" + x(d.key) + " ,0)");
    })
    .style("fill", function (d) {
      var value;
      if (d.key.charAt(d.key.length - 1) == question) {
        value = IndicatorMap[d.key][indicator]; // color violin based on selected indicator
        return fetchColor(value);
      } else {
        return '#DCDCDC';
      }
    })
    .style("stroke", function (d) {
      if (d.key.charAt(d.key.length - 1) == question) {
        console.log('coral: ', d.key)
        return "coral";
      }
      else {
        console.log('none: ', d.key)
        return "none";
      }
    })
    .style("stroke-width", function (d) {
      if (d.key.charAt(d.key.length - 1) == question) return 2;
      else return 0;
    })
    .append("path")
    .datum(function (d) { return (d.value) })
    .attr("d", d3.area()
      .x0(function (d) { return (xNum(-d.length)) })
      .x1(function (d) { return (xNum(d.length)) })
      .y(function (d) { return (y(d.x0)) })
      .curve(d3.curveCatmullRom)
    );
}

function fetchColor(value) {
  var colors = d3.scaleLinear()
    .domain([0, 4])
    .range(["#00FFFF", "#483D8B"]);

  // 1 : "rgb(18, 207, 226)"
  // 2 "rgb(36, 158, 197)"
  // 3 "rgb(54, 110, 168)"
  // 4 "rgb(72, 61, 139)"
  var selectColor = colors(value);
  console.log(value, selectColor);

  return selectColor;
}


// Read in survey data
d3.csv("./data/survey/MondayQuestions.csv", function (error, data) {
  if (error) throw error;

  function calculateSumstat() {
    // Compute the binning for each group of the dataset
    var sumstat = d3.nest()  // nest function allows to group the calculation per level of a factor
      .key(function (d) {
        return d.country;
      })
      .rollup(function (d) {
        input = d.map(function (g) { return g.response; })
        bins = histogram(input)
        return (bins)
      })
      .entries(data);
    return sumstat;
  }

  function calculateMaxNum(sumstat) {
    // What is the biggest number of value in a bin?
    var maxNum = 0
    for (i in sumstat) {
      allBins = sumstat[i].value
      lengths = allBins.map(function (a) { return a.length; })
      longest = d3.max(lengths)
      if (longest > maxNum) { maxNum = longest }
    }

    // The maximum width of a violin must be x.bandwidth = the width dedicated to a group
    var xNum = d3.scaleLinear()
      .range([0, x.bandwidth()])
      .domain([-maxNum, maxNum]);

    return xNum;
  }

  function indicatorChange() {
    // get indicator value
    var form = document.getElementById("indicators")
    var form_val;
    for (var i = 0; i < form.length; i++) {
      if (form[i].checked) {
        form_val = form[i].id;
      }
    }
    // draw graph
    selectedIndicator = form_val;
    drawGraph(sum, xNum, selectedIndicator, selectedQuestion);
  };

  function questionChange() {
    // get question value
    var form = document.getElementById("questions")
    var form_val;
    for (var i = 0; i < form.length; i++) {
      if (form[i].checked) {
        form_val = form[i].id;
      }
    }
    if (form_val === "q45") {
      selectedQuestion = "5";
    } else {
      selectedQuestion = "6";
    }
    d3.selectAll("svg").remove();

    svg = d3.select("#violin")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
      .append("g").call(d3.axisLeft(y));
    buildxScale();

    //draw graph
    drawGraph(sum, xNum, selectedIndicator, selectedQuestion);
  };

  function countryChange() {
    // get selected countries
    var countries = [];
    d3.selectAll(".countryCheck").each(function (d) {
      country = d3.select(this);
      if (country.property("checked")) {
        if (countries.length < 6) {
          countries.push(country.property("id") + " Q45");
          countries.push(country.property("id") + " Q46");
        } else {
          country.property("checked", false);
        }
      }
    });
    allCountries = countries;
    d3.selectAll("svg").remove();

    svg = d3.select("#violin")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")")
      .append("g").call(d3.axisLeft(y));

    buildxScale();
    drawGraph(sum, xNum, selectedIndicator, selectedQuestion);
  };

  d3.select("#indicatorBox").on("change", indicatorChange);
  d3.select("#questionBox").on("change", questionChange);
  d3.selectAll(".countryCheck").on("change", countryChange);

  buildxScale();
  var selectedQuestion = "5";
  var sum = calculateSumstat();
  var xNum = calculateMaxNum(sum);
  var selectedIndicator = 'Avg_Scr';

  drawGraph(sum, xNum, selectedIndicator, selectedQuestion);
});
