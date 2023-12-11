// Indhent data
fetch("https://fisk-server.onrender.com/annualPlastic")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((dataAnnualPlastic) => {
    console.log(dataAnnualPlastic);

    // Vi refererer til data1 i koden
    const data1 = dataAnnualPlastic.foods;

    // opsæt margener, højde og bredde
    const margin = { top: 40, right: 90, bottom: 20, left: 90 };
    const width = 800 - margin.left - margin.right; // Adjust the width as needed
    const height = 600 - margin.top - margin.bottom; // Adjust the height as needed

    // Opret svg elementet
    const svg = d3
      .select(".vis1")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Skalaerne på akserne defineres
    const xScale = d3.scaleLinear().domain([1950, 2020]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 500]).range([height, 0]);

    // Linjen defineres
    const line = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.scaled_prod_ton));

    // Vi tilføjer x- og y-akser til svg'en
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).ticks(20).tickFormat(d3.format("d")))
      .style("font-size", "14px");

    // Label til y-aksen
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 20 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "20px")
      .text("Plast i millioner ton");

    // Label itl x-aksen
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.top + 20)
      .style("text-anchor", "middle")
      .text("Year");

    svg.append("g").call(d3.axisLeft(yScale)).style("font-size", "14px");

    // Grafen sættes ind i svg'en
    svg
      .append("path")
      .datum(data1)
      .attr("fill", "none")
      .attr("stroke", "cyan")
      .attr("stroke-width", 6)
      .attr("d", line);

    // Mouseover funktion oprettes, vha. at gøre punkterne på grafen lidt større og gøre dem usynlige
    svg
      .selectAll("circle")
      .data(data1)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.scaled_prod_ton))
      .attr("r", 6) // radius of the circle
      .attr("fill", "steelblue")
      .attr("opacity", 0)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    // Funktionen for handleren af mouseoveren
    function handleMouseOver(d) {
      // Teksten som vises på mouseoveren
      svg
        .append("text")
        .attr("class", "tooltip-text")
        .attr("x", xScale(d.year))
        .attr("y", yScale(d.scaled_prod_ton) - 25)
        .attr("text-anchor", "middle")
        .text(d.year)
        .attr("fill", "black");

      svg
        .append("text")
        .attr("class", "tooltip-text")
        .attr("x", xScale(d.year))
        .attr("y", yScale(d.scaled_prod_ton) - 15)
        .attr("text-anchor", "middle")
        .text(`${d.scaled_prod_ton} Million tons of plastic`)
        .attr("fill", "black");
    }

    // Funktion for når musen forsvinder fra et punkt
    function handleMouseOut() {
      svg.selectAll(".tooltip-text").remove();
    }
  })
  .catch((error) => {
    // Catch error funktion
    console.error("Fetch error for annualPlastic:", error);
  });

// JSON data
const data = {
  name: "Plastic waste generated",
  value: "353 Mio",
  wasteDetails: [
    {
      name: "Mismanaged plastic waste",
      value: "82 Mio",
    },
    {
      name: "Plastic leaked to the environment",
      value: "19 Mio",
    },
    {
      name: "Plastic leaked to rivers and oceans",
      value: "6 Mio",
    },
  ],
};

// Opret SVG container
const svg3 = d3
  .select(".vis3")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 800);

// Opretter en gruppe for labels og cirklerne
const group = svg3.append("g").attr("transform", "translate(500, 400)"); // SVG visualiseringen skal starte fra midten

const customColors = ["#b0c4de", "#4682b4", "#4169e1", "#00008b"];

const circles = group
  .selectAll("circle")
  .data([353, 82, 19, 6])
  .enter()
  .append("circle")
  .attr("r", (d, i) => {
    //Juster radius af de 3 cirkler
    return i !== 0 ? d * 2 : d;
  })
  .attr("fill", (d, i) => d3.schemeCategory10[i])
  .attr("fill", (d, i) => customColors[i])
  .on("mouseover", mouseover)
  .on("mouseout", mouseout);

// Mouseover funktion til visualiseringen
function mouseover(d, i) {
  const name = getNameFromIndex(data, i);
  const tooltip = svg3
    .append("text")
    .attr("class", "tooltip")
    .attr("text-anchor", "middle")
    .attr("font-size", "20px")
    .style("fill", "black")
    .style("font-weight", "bold")
    .text(`${name}: ${circles.data()[i]} Mio`);

  //Opdatere teksten baseret på musens position
  svg3.on("mousemove", function () {
    const [x, y] = d3.mouse(this);
    tooltip.attr("x", x).attr("y", y - 10); //Justere dens position
  });
}
// Funktion til at få navnet fra data baseret på index
function getNameFromIndex(obj, index) {
  if (index === 0) {
    return obj.name;
  } else if (Array.isArray(obj.wasteDetails)) {
    return obj.wasteDetails[index - 1].name;
  } else if (
    obj.wasteDetails &&
    index === 1 &&
    Array.isArray(obj.wasteDetails[1].details)
  ) {
    return obj.wasteDetails[1].details[0].name;
  }
  return null;
}

// Mouseout event handler
function mouseout() {
  svg3.select(".tooltip").remove();
  svg3.on("mousemove", null); // Remove the mousemove event listener
}

//Vi henter data ind fra serveren
fetch("https://fisk-server.onrender.com/plastic")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const data2 = data;
    //Vi tjekker om der kommer data ind
    console.log(data2);

    //Vi filtrere data sådan at kontinenter også får et navn istedet for at de står blanke
    for (let i = 0; i < data2.foods.length; i++) {
      currentData = data2.foods[i]; //Vi behøver ikke at skrive data2.foods[i] om og om igen
      dataEntity = currentData.entity; //Country name
      dataCode = currentData.code; // Country code

      if (data2.foods[i].code == null) {
        data2.foods[i].rounded_mismanaged = 0; //Det gør vi for at slette den senere
      }
    }

    //Opsætning her skal bruges til circular packing
    const viz2data = {
      name: "root",
      children: data2.foods.map((row) => ({
        country: row.code,
        rounded_mismanaged: row.rounded_mismanaged,
        entity: row.entity,
      })),
    };

    const pack = d3.pack().size([800, 800]).padding(10); //Juster padding efter behov
    // Laver et heiraki ud fra vores data
    const root = d3
      .hierarchy(viz2data)
      .sum((d) => d.rounded_mismanaged)
      .sort((a, b) => b.rounded_mismanaged - a.rounded_mismanaged); // Sortere 'nodes' efter behov

    // Tildel hierarkisk data til pack-layoutet
    const packedData = pack(root);
    // Vælger circular paclong SVG'en
    const svg2 = d3.select("#vis2").attr("width", 800).attr("height", 800);

    // Opret cirkler ud fra hver node, og filtrere data der er under 0.1 da det er for småt og gør visualiseringen grim
    const nodes = svg2
      .selectAll("circle")
      .data(
        packedData.descendants().filter((d) => d.data.rounded_mismanaged >= 0.1)
      ) //
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.r)
      .style("fill", "cyan")
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    // Funktionen for mouseover
    function handleMouseOver(d, i) {
      // Skal vise en tekst der skriver landekode, land og mismanaged værdi
      const tooltip = d3.select("#tooltip");

      tooltip.transition().duration(200).style("opacity", 0.9);

      tooltip
        .html(
          `<strong>Landekode:</strong> ${d.data.country}<br><strong>Land:</strong> ${d.data.entity}<br><strong>Gns. plast i havet pr. person kg/år:</strong> ${d.data.rounded_mismanaged}`
        )
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY - 28 + "px");
    }

    function handleMouseOut(d, i) {
      // Det er for at fjerne tekste når man fjerner musen
      d3.select("#tooltip").transition().duration(500).style("opacity", 0);
    }

    // Vi tilføjer tekst bobler til cirkelerne der viser landekode
    svg2
      .selectAll("text")
      .data(
        packedData.descendants().filter((d) => d.data.rounded_mismanaged >= 0.1) //Vi filtrere også her ellers laver den tekst til alle dem vi fjernede før
      )
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("dy", "0.3em")
      .attr("text-anchor", "middle")
      .text((d) => d.data.country)
      .style("pointer-events", "none"); //gør at musen ikke reagerer på teksten i boblerne;
  })
  .catch((error) => {
    // Håndterer error under fetchen
    console.error("Fetch error:", error);
  });

  //gør at elementer bliver loadet ind glidende i takt med scroll

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
