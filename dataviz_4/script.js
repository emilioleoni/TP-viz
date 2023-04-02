function createSliderYears(data) {
  const years = [...new Set(data.map(d => d.anio_mision))].sort((a, b) => a - b);
  return years;
}

function updatePlot(year, data) {
  const filteredData = data.filter(d => d.anio_mision === year);

  const colorScale = d3.scaleOrdinal()
    .domain(Array.from(new Set(filteredData.map(d => d.nacionalidad))))
    .range(d3.schemeTableau10);

  const trace = {
    x: filteredData.map(d => d.nombre),
    y: filteredData.map(d => d.mision_hs),
    text: filteredData.map(d => `Nacionalidad: ${d.nacionalidad}<br>Ocupación: ${d.ocupacion}<br>Horas de misión: ${d.mision_hs}`),
    type: 'bar',
    marker: {
      color: filteredData.map(d => colorScale(d.nacionalidad)),
    } //Le dejamos color?
  
  };

  const layout = {
    title: `Misiones Espaciales en ${year}`,
    xaxis: { 
      title: { text: 'Astronautas', standoff: 10 },
      automargin: true

    },
    yaxis: { title: 'Horas de misión' },
    width: 1200,
  };

  Plotly.newPlot('chart', [trace], layout);
}

d3.csv('astronautas.csv', d3.autoType).then(data => {
  const years = createSliderYears(data);
  const slider = d3.select('body')
    .append('input')
    .attr('type', 'range')
    .attr('min', years[0])
    .attr('max', years[years.length - 1])
    .attr('step', 1)
    .attr('value', years[0]);

  const displayYear = d3.select('body')
    .append('p')
    .text(`Año seleccionado: ${years[0]}`);

  slider.on('input', function () {
    const selectedYear = +this.value;
    displayYear.text(`Año seleccionado: ${selectedYear}`);
    updatePlot(selectedYear, data);
  });
  

  updatePlot(years[0], data);
  
});
