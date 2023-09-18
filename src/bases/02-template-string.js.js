const name = "john";
const lastname = "Cotamo";

// const nombreCompleto = name + ' '+lastname

const nombreCompleto = `${name} ${lastname}`;

console.log(nombreCompleto);

function getSaludo(name) {
  return `hola ${name}`;
}

console.log(`este es un texto: ${getSaludo(name)}`);
