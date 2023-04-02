d3.csv('astronautas.csv', d3.autoType).then(data => {
  // Objeto de colores para cada país
  const colorScale = d3.scaleOrdinal()
    .domain(Array.from(new Set(data.map(d => d.nacionalidad))))
    .range(d3.schemeTableau10); // Usa el esquema de colores Tableau 10

  // Configuración del gráfico
  const trace = {
    x: data.map(d => d.anio_mision),
    y: data.map(d => d.mision_hs),
    text: data.map(d => `Año de la misión: ${d.anio_mision}<br>Duración de la misión: ${d.mision_hs}<br>Nacionalidad: ${d.nacionalidad}`),
    mode: 'markers',
    type: 'scatter',
    marker: {
      color: data.map(d => colorScale(d.nacionalidad)), // Asigna colores según el país
      size: 12, // Aumenta el tamaño de los puntos
    },
    // Agrega la leyenda de colores
    showlegend: true,
    legend: {
      traceorder: 'reversed',
    },
    transforms: [{
      type: 'groupby',
      groups: data.map(d => d.nacionalidad),
      styles: Array.from(new Set(data.map(d => d.nacionalidad))).map(country => ({
        target: country,
        value: {
          marker: {color: colorScale(country)},
          name: country,
        },
      })),
    }],
  };

  const layout = {
    title: 'Misiones espaciales',
    xaxis: {title: 'Año de la misión'},
    yaxis: {title: 'Duración de la misión (horas)'},
    hovermode: 'closest',
  };

  // Crear y agregar el gráfico al DOM
  Plotly.newPlot('chart', [trace], layout);
});
