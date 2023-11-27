const readlineSync = require("readline-sync");
//require se puede usar para una libreria o codigo qe escribimos en otro archivo//
const { mostrarListaEstudiantes } = require("./lista_estudiantes");
const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar: "
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i}: `
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}:`);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};
registrarEstudiantes();