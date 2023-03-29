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
El código utiliza la biblioteca D3.js para crear un gráfico de puntos que muestra el año de la misión en el eje y y la nacionalidad en el eje x. Las marcas utilizadas son puntos cuadrados con un radio de 3,5 píxeles y se rellenan con colores diferentes según la nacionalidad

# Visualización 2:
- Marca: Scatter plot (gráfico de dispersión)
- Canal X: Año de la misión
- Canal Y: Duración de la misión (horas)
- Canal color: Nacionalidad del astronauta
- Canal tamaño del marcador: Tamaño del punto en el gráfico

# Visulización 3:
- Marcas: rectángulos (en la clase .mark)
- Canal X: horas de misión EVA (eva_mision_hs)
- Canal Y: ocupación del piloto (ocupacion)
- Canal tipográfico: se utiliza para mostrar las etiquetas del eje Y y proporcionar información adicional sobre el gráfico mediante un título principal, subtítulo y fuente de datos.
# Visualización 4:
- Canal X: tiempo en misión (mision_hs).
- Canal Y: astronautas (nombre).
- Canal de color: indica la cantidad total de horas que cada astronauta pasó en misiones espaciales con tonos de azul más oscuros cuán mayor sea el tiempo total de misión del astronauta.
- Canal tipográfico: se utiliza para mostrar las etiquetas del eje Y y proporcionar información adicional sobre el gráfico mediante un título principal, subtítulo y fuente de datos.

# Visualización 5:
- Canal X: astronautas (nombre).
- Canal Y: horas de misión (mision_hs).
- Canal de color: indica la nacionalidad del astronauta 
- Canal tipográfico: se utiliza para mostrar las etiquetas del eje Y y proporcionar información adicional sobre el gráfico mediante un título principal, subtítulo y fuente de datos.