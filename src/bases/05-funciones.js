const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar("Naruto"));

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

console.log(saludar2("Goku"));

const getUser = () => {
  return {
    uid: "ABC",
    username: "SDASF",
  };
};
console.log(getUser());



//tarea
//1.transformar a una funcion Flecha
//2. Tiene que retornar un objeto Implicto
//3.Pruebas
const  getUsuarioActivo = (nombre)=>  ({

    uid: "ABC2434",
    username: 'nombre',
  
})

const usuarioActivo = getUsuarioActivo(`${this.uid} ${this.username}`);
console.log(usuarioActivo);
