const persona = {
  nombre: "John",
  apellido: "Cotamo",
  edad: 45,
  direccion:{
    ciudad: 'bogota',
    zip:5555,
    lat: 14.222,
    lng:34.9233321
  }
};

// console.table({persona});
console.log(persona)


const persona2 = {...persona}
persona2.nombre='manuel'
console.log(persona2)
