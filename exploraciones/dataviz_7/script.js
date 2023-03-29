d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          y: 'nacionalidad',
          x: 'mision_hs',
          symbol: "circle",
          r:3.5,
          fill: 'genero',
        }),
      ],
      grid: true,
      line: true,
      nice: true,
      color: {
        legend: true,
      },
      x:{label:"mision_hs", labelOffset:38},
      y: { label: "Nacionalidad", labelOffset: 150, },
      height: 300,
    width:1200,
    marginLeft: 150,
    marginBottom:50,
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
  