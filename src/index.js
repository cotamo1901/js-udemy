const apiKey = "a4zJGDfGOZ1Nsix5yreFUbm4QLUBg7QW";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => {
    resp.json().then((data) => {
      console.log(data);
    });
  })

  .catch(console.warn);
