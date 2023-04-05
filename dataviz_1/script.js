d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Filtrar los datos para que solo se muestren Estados Unidos y Rusia
  const filteredData = data.filter(d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia');

  // Objeto de colores para cada país
  const colorScale = d3.scaleOrdinal()
    .domain(['EE.UU.', 'U.S.S.R/Rusia'])
    .range(['#1f77b4', '#ff7f0e']);

  // Agrupar los datos por año y nacionalidad y sumar las horas de misión
  const groupedData = d3.group(filteredData, d => d.anio_mision, d => d.nacionalidad);
  const plotData = [];

  // Recorrer los grupos y sumar las horas de misión
  for (const [anio, group] of groupedData) {
    for (const [nacionalidad, values] of group) {
      const mision_hs_total = d3.sum(values, d => d.mision_hs);
      plotData.push({anio_mision: anio, nacionalidad: nacionalidad, mision_hs_total: mision_hs_total, astronautas: values});
    }
  }

  // Configuración del gráfico
  const trace = {
    x: plotData.map(d => d.anio_mision),
    y: plotData.map(d => d.mision_hs_total),
    hovertemplate: '%{text}<br>%{customdata}',
    text: plotData.map(d => `Año de la misión: ${d.anio_mision}<br>Horas acumuladas de astronautas (hs): ${d.mision_hs_total}<br>Nacionalidad: ${d.nacionalidad}<br>Astronautas que participaron:`),
    mode: 'markers',
    type: 'scatter',
    marker: {
      color: plotData.map(d => colorScale(d.nacionalidad)), // Asigna colores según el país
      size: plotData.map(d => 40), // Ajusta el tamaño según las horas de misión
    },
    // Agrega la leyenda de colores
    showlegend: true,
    legend: {
      traceorder: 'reversed',
    },
    transforms: [{
      type: 'groupby',
      groups: plotData.map(d => d.nacionalidad),
      styles: [{
        target: 'EEUU',
        value: {
          marker: {color: colorScale('EEUU')},
          name: 'EEUU',
          opacity: 1,
        },
      },{
        target: 'RUSIA',
        value: {
          marker: {color: colorScale('RUSIA')},
          name: 'Rusia',
          opacity: 1,
        },
      }],
    }],
    customdata: plotData.map(d => {
      const astronautas = d.astronautas.map(a => `•${a.nombre} (${a.mision_hs} hs)`);
      return astronautas.join('<br>');
    }),
  };

  const layout = {
    xaxis: {title: 'Año de la misión'},
    yaxis: {title: 'Horas acumuladas de astronautas (hs)'},
    hovermode: 'closest',
  };

  // Crear y agregar el gráfico al DOM
  Plotly.newPlot('chart', [trace], layout);
});
