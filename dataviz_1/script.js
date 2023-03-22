d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, {
          y: 'anio_mision',
          x: 'nacionalidad',
          symbol: "square",
          r:3.5,
          fill: 'nacionalidad',
        }),
      ],
      grid: true,
      line: true,
      nice: true,
      color: {
        legend: false,
      },
      x:{label:"Nacionalidad", labelOffset:38},
      y:{label:"Año de la mision", labelOffset:100},
    height: 300,
    width:1200,
    marginLeft: 100,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 70,
    })
    // Agregamos chart al div#chart de index.html
    d3.select('#chart').append(() => chart)
  })
  