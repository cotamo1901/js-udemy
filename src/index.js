// const apiKey = "a4zJGDfGOZ1Nsix5yreFUbm4QLUBg7QW";

// const peticion = fetch(
//   `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// );

// peticion
// .then((resp) => resp.json())
// .then(({ data }) => {
//   // console.log(data.images.original.url)
//   const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
//   })
//   .catch(console.warn);

const getImagen = async () => {
  const apiKey = "a4zJGDfGOZ1Nsix5yreFUbm4QLUBg7QW";
  const resp =await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const data = await resp.json()
  console.log(data)
};

getImagen();
