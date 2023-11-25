//programa Encuestas
//creado por Francisco E. Vargas
// fecha 22/11/23

// Clase Preguntas
class Preguntas {
  constructor(pregunta, opciones, respuestas) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuestas = respuestas;
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
      console.log(`Voto registrado para la opción: ${opcion}`);
    } else {
      console.log(`La opción "${opcion}" no es válida.`);
    }
  }

  mostrarResultados() {
    console.log(`Resultados de la pregunta: ${this.pregunta}`);
    for (const opcion in this.resultados) {
      console.log(`${opcion}: ${this.resultados[opcion]} votos`);
    }
  }
}

// Crear instancias de Preguntas
const pregunta1 = new Preguntas(
  '¿Cuál es el lenguaje de programación en la web?',
  ['PHP', 'go', 'Phyton', 'JS'],
  'JS'
);

const pregunta2 = new Preguntas(
  '¿Cuál es el lenguaje de estilos en la web?',
  ['PHP', 'LESS', 'SASS', 'CSS'],
  'CSS'
);

// Clase Encuesta
class Encuesta {
  constructor() {
    this.preguntas = [];
  }

  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta);
  }

  realizarEncuesta() {
    this.preguntas.forEach(pregunta => {
      const opcion = prompt(pregunta.pregunta + ' (' + pregunta.opciones.join(', ') + '):');
      pregunta.agregarVoto(opcion);
    });
    this.mostrarResultados();
  }

  mostrarResultados() {
    this.preguntas.forEach(pregunta => {
      pregunta.mostrarResultados();
    });
  }
}

// Crear instancia de Encuesta
const miEncuesta = new Encuesta();

// Agregar preguntas a la encuesta
miEncuesta.agregarPregunta(pregunta1);
miEncuesta.agregarPregunta(pregunta2);

// Realizar la encuesta
miEncuesta.realizarEncuesta();