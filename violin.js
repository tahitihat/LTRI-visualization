var margin = { top: 10, right: 30, bottom: 30, left: 40 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append svg object to page
var svg = d3.select("#violin")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Read in survey data
d3.csv("./data/survey/AdjustedQuestion45.csv", function (data) {

  // Build y scale
  var y = d3.scaleLinear()
    .domain([0, 7])
    .range([height, 0])
  svg.append("g").call(d3.axisLeft(y))

  // Build x scale
  var x = d3.scaleBand()
    .range([0, width])
    .domain(["Burkina_Faso", "Cameroon", "Costa_Rica"])
    .padding(0.05)
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

  // Histogram
  var histogram = d3.histogram()
    .domain(y.domain())
    .thresholds(y.ticks(20)) // resolution
    .value(d => d)

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
    .entries(data)

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
    .domain([-maxNum, maxNum])

  // Add the shape to this svg!
  svg
    .selectAll("myViolin")
    .data(sumstat)
    .enter()
    .append("g")
    .attr("transform", function (d) { return ("translate(" + x(d.key) + " ,0)") }) // Translation on the right to be at the group position
    .append("path")
    .datum(function (d) { return (d.value) })
    .style("stroke", "none")
    .style("fill", "#69b3a2")
    .attr("d", d3.area()
      .x0(function (d) { return (xNum(-d.length)) })
      .x1(function (d) { return (xNum(d.length)) })
      .y(function (d) { return (y(d.x0)) })
      .curve(d3.curveCatmullRom)
    )
});