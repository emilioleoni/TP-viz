d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marginLeft: 200,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 100,
    width:"1000",
    height:300,
    nice:true,
    grid:true,
    line:true,
    marks: [
      Plot.barX(data, {
        x: 'eva_mision_hs', fill: 'ocupacion',
        y: 'ocupacion'
      }),
    ],
    y: {
      label: "Ocupación", 
      domain: d3.sort(data, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.ocupacion),
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
