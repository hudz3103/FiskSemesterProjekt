const data1 = [
    { year: 1950, value: 2 },
    { year: 1951, value: 2 },
    { year: 1952, value: 2 },
    { year: 1953, value: 3 },
    { year: 1954, value: 3 },
    { year: 1955, value: 4 },
    { year: 1956, value: 5 },
    { year: 1957, value: 5 },
    { year: 1958, value: 6 },
    { year: 1959, value: 7 },
    { year: 1960, value: 8 },
    { year: 1961, value: 9 },
    { year: 1962, value: 11 },
    { year: 1963, value: 13 },
    { year: 1964, value: 15 },
    { year: 1965, value: 17 },
    { year: 1966, value: 20 },
    { year: 1967, value: 23 },
    { year: 1968, value: 27 },
    { year: 1969, value: 32 },
    { year: 1970, value: 35 },
    { year: 1971, value: 38 },
    { year: 1972, value: 44 },
    { year: 1973, value: 51 },
    { year: 1975, value: 46 },
    { year: 1976, value: 54 },
    { year: 1977, value: 59 },
    { year: 1978, value: 64 },
    { year: 1979, value: 71 },
    { year: 1980, value: 70 },
    { year: 1981, value: 72 },
    { year: 1982, value: 73 },
    { year: 1983, value: 80 },
    { year: 1984, value: 86 },
    { year: 1985, value: 90 },
    { year: 1986, value: 96 },
    { year: 1987, value: 104 },
    { year: 1988, value: 110 },
    { year: 1989, value: 114 },
    { year: 1990, value: 120 },
    { year: 1991, value: 124 },
    { year: 1992, value: 132 },
    { year: 1993, value: 137 },
    { year: 1994, value: 151 },
    { year: 1995, value: 156 },
    { year: 1996, value: 168 },
    { year: 1997, value: 180 },
    { year: 1998, value: 188 },
    { year: 1999, value: 202 },
    { year: 2000, value: 213 },
    { year: 2001, value: 218 },
    { year: 2002, value: 231 },
    { year: 2003, value: 241 },
    { year: 2004, value: 256 },
    { year: 2005, value: 263 },
    { year: 2006, value: 280 },
    { year: 2007, value: 295 },
    { year: 2008, value: 281 },
    { year: 2009, value: 288 },
    { year: 2010, value: 313 },
    { year: 2011, value: 325 },
    { year: 2012, value: 338 },
    { year: 2013, value: 352 },
    { year: 2014, value: 367 },
    { year: 2015, value: 381 },
    { year: 2016, value: 400 },
    { year: 2017, value: 420 },
    { year: 2018, value: 441 },
    { year: 2019, value: 459 }
  ];

d3.queue()
  .defer(d3.json, "http://localhost:3000/plastic") //data1
  .await(ready);


//kolonner i hvert dataset udvælges og knyttes til en
let showData1 = data1.data;
showData1.forEach(element => {
  dataMap1.set(element.code, +element.mismanaged);
});

   
// Set up the chart dimensions
const margin = { top: 40, right: 70, bottom: 50, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create an SVG container
const svg = d3.select(".vis1")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define the scales
const xScale = d3.scaleLinear().domain([1950, 2020]).range([0, width]);
const yScale = d3.scaleLinear().domain([0, d3.max(data1, d => d.value)]).range([height, 0]);

// Create the line
const line = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.value));

// Add the X and Y axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(xScale).ticks(20).tickFormat(d3.format("d")));

// Add y-axis label
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x", 0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Waste generated in million tonnes");

// Add x-axis label
svg.append("text")
  .attr("x", width / 2)
  .attr("y", height + margin.top + 20)
  .style("text-anchor", "middle")
  .text("Year");


svg.append("g")
  .call(d3.axisLeft(yScale));

// Add the line to the chart
svg.append("path")
  .datum(data1)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 4)
  .attr("d", line);

svg.selectAll("circle")
  .data(data1)
  .enter().append("circle")
  .attr("cx", d => xScale(d.year))
  .attr("cy", d => yScale(d.value))
  .attr("r", 4) // radius of the circle
  .attr("fill", "steelblue")
  .attr("opacity", 0)
  .on("mouseover", handleMouseOver)
  .on("mouseout", handleMouseOut);

// Function to handle mouseover event
function handleMouseOver(d) {
  // Add text inside the square
  svg.append("text")
    .attr("class", "tooltip-text")
    .attr("x", xScale(d.year))
    .attr("y", yScale(d.value)-25)
    .attr("text-anchor", "middle")
    .text(d.year)
    .attr("fill", "black");

  svg.append("text")
    .attr("class", "tooltip-text")
    .attr("x", xScale(d.year))
    .attr("y", yScale(d.value) -15)
    .attr("text-anchor", "middle")
    .text(`${d.value} Million tons of plastic`)
    .attr("fill", "black");
}


// Function to handle mouseout event
  function handleMouseOut() {
    // Remove the text elements on mouseout
    svg.selectAll(".tooltip-text").remove();
  }
