d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        y: 'mision_hs',
        x: 'anio_mision',
        fill: 'nacionalidad',
      }),
    ],
    x:{label:"Año de la mision", labelOffset:30},
    y:{label:"Duracion de la mision", labelOffset:120},
    grid: true,
    line: true,
    nice: true,
    marginLeft:120,
    marginBottom:120,
    height: 600,
    width: 800,
    color: {
      legend: true,
    },
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})
