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
- Canal X: Nacionalidad.
- Canal Y: Año de la mision.
- Canal color: Nacionaldidad (Aplicamos este canal para que ayude al usuario con la visualización)
    Justificacion: Decidimos usar un Scatter plot para representar los distintos años que hubieron misiones espaciales, porque es una forma facil de poder entender en que año se hizo una mision y que año no.  Tambien facilita ver explicitamente los años que un nacion hizo una mision espacial ya que se puede, 
    observar de forma vertical. Los colores los elegimos para poder ayudar a la visualizacion de naciones.

# Visualización 2:
Aclaracion: Usamos tags en donde pusimos los datos que lleva cada astronauta de forma explicita. Por ejemplo pusimos su nacionalidad escrita, el año en que hizo la mision y tambien la duracion de la mision. 
- Marca: Scatter plot (gráfico de dispersión).
- Canal X: Año de la misión.
- Canal Y: Duración de la misión (horas).
- Canal color: Nacionalidad del astronauta.
    Justificacion: Para la segunda visualización queriamos observar como al pasar de los años varia la duración de las misiones dependiendo de las naciones como tambien en general. Por esa razon tambien pensamos que un Scatter plot era la mejor forma para poder representar las variables. Decidimos usar colores para poder diferenciar por nación y de esa forma tener la posiblidad de comparar por nacion.

# Visulización 3:
- Marcas: Rectángulos (en la clase .mark).
- Canal X: Horas de misión EVA (eva_mision_hs).
- Canal Y: Ocupación del piloto (ocupacion).
- Canal color: Ocupacion del piloto (ocupación).
- Canal Posición: Las barras estan posicionadas en base a su tiempo en mision de forma ascendente hacia arriba (eje y). Por lo tanto usamos la posicion para ayudar a la representacion cuantitativa del tiempo de mision EVA de los astronautas.
    Justificacion: En el caso de la tercer visualización decidimos sumar todas las horas de mision eva dependiendo de que Ocupación tenia el astronauta. Por esta razon decidimos usar un grafico de barra horizontal, para comparar estas distintas agrupaciones. Aqui tambien decidimos usar un Canal color para ayudar con la diferenciacion de ocupaciones. Usamos la posicion de los graficos de barra para tambien ayudar con la visualizacion de las horas de mision EVA de cada ocupacion.

# Visualización 4:
- Marca: Rectángulos (en la clase .mark)
- Canal X: tiempo en misión (mision_hs).
- Canal Y: astronautas (nombre).
- Canal de color: indica la cantidad total de horas que cada astronauta pasó en misiones espaciales con tonos de azul más oscuros cuán mayor sea el tiempo total de misión del astronauta.
- Canal Saturación: Se utiliza como una representación cuantitativa para el tiempo en mision de los astronautas.
- Canal Posición: Las barras estan posicionadas en base a su tiempo en mision de forma ascendente  hacia arriba (eje y). Por lo tanto usamos la posicion para ayudar a la representacion cuantitativa del tiempo de mision de los astronautas.
    Justificacion: Decidimos usar un grafico de barras para poder representar de forma explicita el tiempo de mision de cada astronauta. Tambien decidimos usar los colores, la saturacion de colores y el posicionamiento de las barras de forma ascendente para poder ayudar a la visualizacion de los tiempos de mision de cada astronauta. 


# Visualización 5:
Aclaracion: Usamos tags en donde pusimos los datos que lleva cada astronauta de forma explicita. Por ejemplo pusimos su nacionalidad escrita, su ocupacion y tambien la duracion de la mision.
-Marcas: Rectángulos (en la clase .mark)
- Canal X: astronautas (nombre).
- Canal Y: horas de misión (mision_hs).
- Canal de color: indica la nacionalidad del astronauta.
- Canal Slider: indica el año de la misión y permite al usuario desplazarse por los años de las misiones espaciales.
    Justificacion: Para poder representar correctamente los datos de las misiones espaciales de astronautas de distintos paises segun los distintos años elegimos representarlo con un grafico de barra con slider para moder variar el grafico segun el año. Decidimos usar colores para poder diferenciar por nacion para poder diferenciar la nacionaliad de cada astronauta ubicado en el eje x. 
