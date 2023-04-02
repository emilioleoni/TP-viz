d3.csv('astronautas.csv', d3.autoType).then(data => {
  const groupedData = d3.rollup(data, group => d3.sum(group, d => d.eva_mision_hs), d => d.ocupacion);

  // Lo convierto en una lista
  const filteredData = Array.from(groupedData, ([ocupacion, eva_mision_hs]) => ({ ocupacion, eva_mision_hs }));

  // Eligo los 25 con mas tiempo de mision total de forma ascendente
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marginLeft: 200,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 100,
    width:"1000",
    height:400,
    nice:true,
    grid:true,
    line:true,
    marks: [
      Plot.barX(filteredData, {
        x: 'eva_mision_hs',
        fill: 'ocupacion',
        y: 'ocupacion',
        title: d => `${d.eva_mision_hs} horas`
      }),
    ],
    y: {
      label: "Ocupación", 
      domain: d3.sort(filteredData, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.ocupacion),
    },
    x: {
      label:"Horas de mision eva",
      grid: true,
    }
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})  
