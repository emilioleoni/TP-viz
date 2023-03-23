Plotly.d3.csv('astronautas.csv', function(err, data) {
  if(err) throw err;
  console.log(data);

  let occupations = data.map(d => d.ocupacion);
  let hours = data.map(d => d.eva_mision_hs);

  let colorScale = d3.scaleOrdinal(d3.schemeCategory10)
                    .domain(occupations);

  let trace = {
    x: hours,
    y: occupations,
    type: 'bar',
    orientation: 'h',
    marker: {
      color: colorScale(occupations),
    }
  };

  let layout = {
    title: {
      text: 'Ocupaciones que estuvieron más tiempo en misiones EVA'
    },
    xaxis: {
      title: {
        text: 'Horas de misión EVA'
      },
      rangemode: 'tozero'
    },
    yaxis: {
      title: {
        text: 'Ocupación'
      },
      tickvals: occupations,
      automargin: true,
    },
    margin: {
      l: 150,
      r: 50,
      b: 100,
      t: 100,
      pad: 4
    }
  };

  Plotly.newPlot('chart', [trace], layout);
});
