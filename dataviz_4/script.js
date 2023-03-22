d3.csv('astronautas.csv', d3.autoType).then(data => {
  const nth = 3; // Change this to the desired interval
  const filteredData = data.filter((_, i) => i % nth === 0);

  // Define a color scale
  const colorScale = d3.scaleSequential()
    .domain(d3.extent(filteredData, d => d.mision_hs))
    .interpolator(d3.interpolateReds);

  let chart = Plot.plot({
    y: {
      label: "Astronautas",
      type: "band",
      tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
    },
    marks: [
      Plot.barX(filteredData, {
        y: "nombre",
        x: "mision_hs",
        sort:{y:"x"},
        fill: d => colorScale(d.mision_hs) // Use color scale to determine bar color
      }),
      Plot.ruleX([0])
    ],
    marginBottom: 40,
    marginLeft: "150",
    width:"1100",
    height:600,
    nice:true,
    grid:true,
    line:true,
  });

  d3.select('#chart').append(() => chart)
});