//Destructuracion
//Asignacion Destructurante

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "ironman",
};

const setContext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lar: 12.5455,
      lng: -5756.45,
    },
  };
};

const { nombreClave, anios, latlng:{lar,lng} } = setContext(persona);

console.log(nombreClave, anios);
console.log(lar,lng)
