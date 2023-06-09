d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Sumo el total de cada mision a el astronauta correspondiente
  const groupedData = d3.rollup(data, group => d3.sum(group, d => d.mision_hs), d => d.nombre);

  // Lo convierto en una lista
  const filteredData = Array.from(groupedData, ([nombre, mision_hs]) => ({ nombre, mision_hs }));

  // Eligo los 25 con mas tiempo de mision total
  const sortedData = filteredData.sort((a, b) => b.mision_hs - a.mision_hs).slice(0, 25);

  // Elijo el color y como lo sorteo
  const colorScale = d3.scaleSequential()
    .domain(d3.extent(sortedData, d => d.mision_hs))
    .interpolator(d3.interpolateBlues);

  let chart = Plot.plot({
    y: {
      label: "Astronautas",
      type: "band",
      tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
    },
    marks: [
      Plot.barX(sortedData, {
        y: "nombre",
        x: "mision_hs",
        sort:{y:"x"},
        fill: d => colorScale(d.mision_hs) // Use color scale to determine bar color
      }),
      Plot.ruleX([0])
    ],
    x:{label: "Tiempo en mision"},
    marginLeft: 200,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 100,
    width:"1100",
    height:500,
    nice:true,
    grid:true,
    line:true,
  });

  d3.select('#chart').append(() => chart)
});

