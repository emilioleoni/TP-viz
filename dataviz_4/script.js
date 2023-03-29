d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Sumo el total de cada mision a el astronauta correspondiente
  const groupedData = d3.rollup(data, group => d3.sum(group, d => d.mision_hs), d => d.nombre);

  // Lo convierto en una lista
  const filteredData = Array.from(groupedData, ([nombre, mision_hs]) => ({ nombre, mision_hs }));

  // Eligo los 25 con mas tiempo de mision total de forma ascendente
  const sortedData = filteredData.sort((a, b) => d3.descending(a.mision_hs, b.mision_hs)).slice(0, 25);

  // Suma el tiempo de los primeros 25 astronautas
  const totalTime = d3.sum(sortedData, d => d.mision_hs);

  // Calcula el tiempo promedio
  const averageTime = totalTime / 25;

  // Elijo el color y como lo sorteo
  const colorScale = d3.scaleSequential()
    .domain(d3.extent(sortedData, d => d.mision_hs))
    .interpolator(d3.interpolateBlues);

    let chart = Plot.plot({
      y: {
        label: "Astronautas",
        type: "band",
        tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
        domain: d3.sort(sortedData, d => -d.mision_hs).map(d => d.nombre),
      },
      x: {
        label: "Tiempo en mision",
      },
      marks: [
        Plot.barX(sortedData, {
          y: "nombre",
          x: "mision_hs",
          fill: d => colorScale(d.mision_hs)
        }),
        Plot.ruleX([0]),
      ],
      marginLeft: 200,
      marginRight: 50,
      marginTop: 50,
      marginBottom: 100,
      width: 1100,
      height: 600,
      nice: true,
      grid: true,
      line: true,
    });
  
    d3.select('#chart')
      .append(() => chart);
  
    d3.select('#chart')
      .append('text')
      .attr('x', 600)
      .attr('y', 640)
      .attr('text-anchor', 'middle')
      .text(`Tiempo promedio de mision de los 25 astronautas: ${averageTime.toFixed(2)} hs`);
  });