d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nombre', fill:'mision_hs',
      }),
    ],
    y: {label:"Nombres",
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nombre), 
    },
    x: {
      grid: true, label:"Duración de la mision",
    },
    color: {
      scheme:'reds',
    },
    height: 1500,
    width:800,
    marginLeft: 190,
    marginBottom: 40,
    nice:true,
    grid:true,
    line:true,
  })
  d3.select('#chart').append(() => chart)
})
