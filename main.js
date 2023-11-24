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



// JSON data
const data = {
  "name": "Plastic waste generated",
  "value": "353 Mio",
  "wasteDetails": [
    {
      "name": "Mismanaged plastic waste",
      "value": "82 Mio"
    },
    {
      "name": "Plastic leaked to the environment",
      "value": "19 Mio",
    },
        {
          "name": "Plastic leaked to rivers and oceans",
          "value": "6 Mio"
        }
      ]
    };

// Set up SVG container
const svg3 = d3.select(".vis3")
.append("svg")
  .attr("width", 800)  // Increased width
  .attr("height", 800); // Increased height;

// Define the zoom behavior
const zoom = d3.zoom()
  .scaleExtent([1, 8])
  .on("zoom", zoomed);

//svg3.call(zoom); */den fucker med scroll funktionen

// Create a group for the circles and labels
const group = svg3.append("g")
  .attr("transform", "translate(400, 400)"); // Centered translation

  const customColors = ["#b0c4de", "#4682b4", "#4169e1", "#00008b"];

  const circles = group.selectAll("circle")
  .data([353, 82, 19, 6])
  .enter().append("circle")
  .attr("r", (d, i) => {
    // Adjust the radius of the inner three circles
    return i !== 0 ? d * 2 : d; 
  })
  .attr("fill", (d, i) => d3.schemeCategory10[i])
  .attr("fill", (d, i) => customColors[i])
  .on("click", clicked)
  .on("mouseover", mouseover)
  .on("mouseout", mouseout);

//let zoomedIn = false;

// Zoom function (selvom vi har fjernet zoom, så virker koden ikke, hvis vi sletter det her)
function zoomed() {
  group.attr("transform", d3.event.transform);
}

// Click event handler
function clicked() {
  const clickedCircle = d3.select(this);

}
/*
  // Toggle between zooming in and zooming out
  if (!zoomedIn) {
    // Zoom in on the clicked circle
    group.transition()
      .duration(750)
      .attr("transform", `translate(${400 - clickedCircle.attr("cx")}, ${400 - clickedCircle.attr("cy")}) scale(8)`);
    zoomedIn = true;
  } else {
    // Zoom out to the original size
    group.transition()
      .duration(750)
      .attr("transform", "translate(400, 400) scale(1)");
    zoomedIn = false;
  }
}
*/
// Mouseover event handler
function mouseover(d, i) {
  const name = getNameFromIndex(data, i);

  // Create the tooltip
  const tooltip = svg3.append("text")
    .attr("class", "tooltip")
    .attr("text-anchor", "middle")
    .style("fill", "black")
    .style("font-weight", "bold")
    .text(`${name}: ${circles.data()[i]} Mio`);

  // Update tooltip position on mousemove
  svg3.on("mousemove", function () {
    const [x, y] = d3.mouse(this);
    tooltip.attr("x", x).attr("y", y - 10); // Adjust the vertical position
  });
}


// Function to get the name from the nested JSON structure based on index
function getNameFromIndex(obj, index) {
  if (index === 0) {
    return obj.name;
  } else if (Array.isArray(obj.wasteDetails)) {
    return obj.wasteDetails[index - 1].name;
  } else if (obj.wasteDetails && index === 1 && Array.isArray(obj.wasteDetails[1].details)) {
    return obj.wasteDetails[1].details[0].name;
  }
  return null;
}

// Mouseout event handler
function mouseout() {
  svg3.select(".tooltip").remove();
  svg3.on("mousemove", null); // Remove the mousemove event listener
}



// 
let data2;
// Fetch data from the server
fetch("http://localhost:3000/plastic")
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {

  // Log the data to the console
  console.log(data);
  data2 = data;
  console.log(data2); //Data kommer ind i vores data2 array
  console.log(data2.foods[1]) //Her kan man få fat i et land

  
  const viz2data = {
    name: 'root',
    children: data2.foods
      .filter(row => row.mismanaged !== 5) // Remove nodes with a value of 0
      .map(row => ({
        country: row.code,
        mismanaged: row.mismanaged,
        entity : row.entity
      }))
  };



  const pack = d3.pack().size([800, 800]).padding(10); // Adjust the padding value as needed
  // Create a hierarchy from the data
  const root = d3.hierarchy(viz2data)
    .sum(d => d.mismanaged)
    .sort((a, b) => b.mismanaged - a.mismanaged); // Sort nodes by mismanaged value
  
  // Assign the hierarchical data to the pack layout
  const packedData = pack(root);
  // Select the circular packing SVG

const svg2 = d3.select("#vis2").attr("width", 800).attr("height", 800);

// ...
// Create circles for each node, excluding the root and nodes with mismanaged value less than 5
const nodes = svg2
  .selectAll('circle')
  .data(packedData.descendants().filter(d => d.data.mismanaged >= 0.05))  // Filter out values less than 5
  .enter()
  .append('circle')
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
  .attr('r', d => d.r)
  .style('fill', 'red');


//HEHEHEH 

// Optional: Add text labels
svg2
  .selectAll('text')  // Select from svg2, not svg
  .data(packedData.descendants().filter(d => d.data.mismanaged >= 0.05))
  .enter()
  .append('text')
  .attr('x', d => d.x)
  .attr('y', d => d.y)
  .attr('dy', '0.3em')
  .attr('text-anchor', 'middle')
  .text(d => d.data.country);

})
.catch(error => {
  // Handle errors during the fetch
  console.error('Fetch error:', error);
});

