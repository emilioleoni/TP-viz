# Astronautas que participaron en misiones espaciales

Los datos corresponden a astronautas que participaron en misiones espaciales desde el 1 de enero de 2010 hasta el 15 de enero de 2020 recopilados por la NASA (Estados Unidos), Roscosmos (Rusia) y otros sitios. Son más de 150 registros, en donde cada fila representa un astronauta participante de una misión espacial. 

Los campos son:

1. **nombre:** Nombre completo
2. **genero:** Género
3. **anio_nacimiento:** Año de nacimiento
4. **nacionalidad:** Nacionalidad
5. **status:** Estatus militar o civil
6. **ocupacion:** Título profesional
7. **anio_mision:** Año de la misión 
8. **edad_mision:** Edad del astronauta cuando realizó la misión
9. **mision_hs:** Duración de la misión en horas
10. **eva_mision_hs:** Duración de las actividades extravehiculares (EVA) en horas
Marcas y canales utilizados:


# Visualización 1:

- Marca: Scatter plot (gráfico de dispersión).
- Canal X: Año de la misión.
- Canal Y: Duración de la misión (horas).
- Canal color: Nacionalidad del astronauta.
- Canal Etiqueta: la etiqueta se utiliza para codificar la información exacta sobre la cantidad total de horas que acumula la nación, qué astronautas participaron y cuántas horas dedicó cada uno.

Justificación: Queríamos observar cómo se da la competencia implícita entre EEUU y Rusia según el año. Utilizamos los colores para diferenciar las nacionalidades. 


# Visulización 2:

- Marcas: Rectángulos (gráfico de barras).
- Canal X: Horas de misión EVA (eva_mision_hs).
- Canal Y: Ocupación del piloto (ocupacion).
- Canal Color: Ocupación del piloto (ocupación).
- Canal Posición: Las barras están posicionadas en base a su tiempo en misión de forma ascendente hacia arriba (eje y). Por lo tanto, usamos la posición para ayudar a la representación cuantitativa del tiempo de misión EVA de los astronautas.
- Canal Etiqueta: la etiqueta se utiliza para codificar la información sobre la cantidad de horas de misión EVA asociadas con cada ocupación, lo que permite al usuario comprender mejor los datos que se están presentando.

Justificación: En el caso de la segunda visualización decidimos sumar todas las horas de misión EVA dependiendo de qué Ocupación tenía el astronauta. Por esta razón, decidimos usar un gráfico de barra horizontal para comparar estas distintas agrupaciones. Aquí también decidimos utilizar un Canal color para ayudar con la diferenciación de ocupaciones. Usamos la posición de los gráficos de barra para también ayudar con la visualización de las horas de misión EVA de cada ocupación.


# Visualización 3:

- Marca: Rectángulos (gráfico de barras)
- Canal X: tiempo en misión (mision_hs).
- Canal Y: astronautas (nombre).
- Canal de color: indica la cantidad total de horas que cada astronauta pasó en misiones espaciales con tonos de azul más oscuros cuán mayor sea el tiempo total de misión del astronauta.
- Canal Saturación: Se utiliza como una representación cuantitativa para el tiempo en misión de los astronautas.
- Canal Posición: Las barras están posicionadas en base a su tiempo en misión de forma ascendente hacia arriba (eje y). Por lo tanto, usamos la posición para ayudar a la representación cuantitativa del tiempo de misión de los astronautas.

Justificación: Decidimos utilizar un gráfico de barras para poder representar de forma explícita el tiempo de misión de cada astronauta. También agregamos colores, opacidad en ellos y el posicionamiento de las barras de forma ascendente para poder ayudar a la visualización de los tiempos de misión de cada astronauta.


# Visualización 4:

Aclaración: Utilizamos tags mostrar los datos que lleva cada astronauta de forma precisa cuando nos apoyamos sobre su barra. Podremos ver su nacionalidad, su ocupación y también la duración de la misión.

- Marcas: Rectángulos (gráfico de barras)
- Canal X: astronautas (nombre).
- Canal Y: horas de misión (mision_hs).
- Canal de color: indica la nacionalidad del astronauta.
- Canal Slider: indica el año de la misión y permite al usuario desplazarse por los años de las misiones espaciales.
- Canal Etiqueta: la etiqueta se utiliza para mostrar precisamente datos del astronauta como sus horas de la misión, lo que permite al usuario comprender mejor los datos que se están presentando.

Justificación: Para poder representar correctamente los datos de las misiones espaciales de astronautas de distintos países según los distintos años, elegimos representarlo con un gráfico de barra con slider para poder variar el gráfico según el año. Decidimos utilizar colores para poder encontrar alguna nación dominante en los trabajos y ubicamos cada astronautas en el eje X.``` 



 
