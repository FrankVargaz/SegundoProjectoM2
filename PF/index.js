//programa Encuestas
//creado por Francisco E. Vargas
// fecha 22/11/23

// Función para crear una nueva encuesta (función pura)
const crearEncuesta = () => {
    const pregunta = prompt('Ingrese la pregunta de la encuesta:');
    const opcionesStr = prompt('Ingrese las opciones de respuesta separadas por coma (por ejemplo, opción1,opción2,opción3):');
    const opciones = opcionesStr.split(',');
    return {
      pregunta,
      opciones,
      resultados: opciones.reduce((acc, opcion) => ({ ...acc, [opcion]: 0 }), {}),
    };
  };
  
  // Función para realizar votación (función pura)
  const votar = (encuesta, opcion) => {
    if (encuesta.opciones.includes(opcion)) {
      const nuevosResultados = {
        ...encuesta.resultados,
        [opcion]: encuesta.resultados[opcion] + 1,
      };
      mostrarResultados(nuevosResultados);
      console.log(`Voto registrado para la opción: ${opcion}`);
      return {
        ...encuesta,
        resultados: nuevosResultados,
      };
    } else {
      console.log(`La opción "${opcion}" no es válida.`);
      return encuesta;
    }
  };
  
  // Función para mostrar resultados (función pura)
  const mostrarResultados = (resultados) => {
    console.log('Resultados de la encuesta:');
    Object.entries(resultados).forEach(([opcion, votos]) => {
      console.log(`${opcion}: ${votos} votos`);
    });
  };
  
  // Función principal (composición de funciones puras)
  const main = () => {
    let encuestaActual;
  
    const menu = () => {
      const opcionMenu = prompt(`Seleccione una opción:\n1. Crear nueva encuesta\n2. Votar\n3. Salir`);
      switch (opcionMenu) {
        case '1':
          encuestaActual = crearEncuesta();
          break;
        case '2':
          if (encuestaActual) {
            const opcion = prompt('Ingrese su voto:');
            encuestaActual = votar(encuestaActual, opcion);
          } else {
            console.log('Primero debe crear una encuesta.');
          }
          break;
        case '3':
          console.log('Saliendo del programa.');
          return;
        default:
          console.log('Opción no válida. Inténtelo de nuevo.');
      }
      menu();
    };
  
    // Ejecutar el programa (composición de funciones)
    menu();
  };
  
  // Ejecutar el programa principal
  main();
