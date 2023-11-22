//programa Encuestas
//creado por Francisco E. Vargas
// fecha 22/11/23

// Definición de la clase Encuesta
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.resultados = this.inicializarResultados(opciones);
    }
  
    inicializarResultados(opciones) {
      const resultados = {};
      opciones.forEach(opcion => {
        resultados[opcion] = 0;
      });
      return resultados;
    }
  
    agregarVoto(opcion) {
      if (this.opciones.includes(opcion)) {
        this.resultados[opcion]++;
        this.mostrarResultados(); // Mostrar resultados en tiempo real
        console.log(`Voto registrado para la opción: ${opcion}`);
      } else {
        console.log(`La opción "${opcion}" no es válida.`);
      }
    }
  
    mostrarResultados() {
      console.log('Resultados de la encuesta:');
      for (const opcion in this.resultados) {
        console.log(`${opcion}: ${this.resultados[opcion]} votos`);
      }
    }
  }
  
  // Función para crear una nueva encuesta
  const crearEncuesta = () => {
    const pregunta = prompt('Ingrese la pregunta de la encuesta:');
    const opcionesStr = prompt('Ingrese las opciones de respuesta separadas por coma (por ejemplo, opción1,opción2,opción3):');
    const opciones = opcionesStr.split(',');
    return new Encuesta(pregunta, opciones);
  };
  
  // Función para realizar votación
  const votar = (encuesta) => {
    const opcion = prompt('Ingrese su voto:');
    encuesta.agregarVoto(opcion);
  };
  
  // Función principal
  const main = () => {
    let encuestaActual;
  
    while (true) {
      const opcionMenu = prompt(`Seleccione una opción:\n1. Crear nueva encuesta\n2. Votar\n3. Salir`);
  
      switch (opcionMenu) {
        case '1':
          encuestaActual = crearEncuesta();
          break;
        case '2':
          if (encuestaActual) {
            votar(encuestaActual);
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
    }
  };
  
  // Ejecutar el programa
  main();