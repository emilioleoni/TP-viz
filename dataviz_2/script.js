d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        y: 'mision_hs',
        x: 'anio_mision',
        fill: 'nacionalidad',
        //title:;  AGREGAR TITLE, ME DESCRIBE CADA PUNTO
      }),
    ],
    x:{label:"Año de la mision", labelOffset:30},
    y:{label:"Duracion de la mision", labelOffset:120},
    grid: true,
    line: true,
    nice: true,
    marginLeft: 120,
    marginRight: 60,
    marginTop: 50,
    marginBottom: 100,
    height: 450,
    width: 800,
    color: {
      legend: true,
    },
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})
