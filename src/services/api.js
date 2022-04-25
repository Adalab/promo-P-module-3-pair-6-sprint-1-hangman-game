const getWords = () => {
  return fetch("https://clientes.api.greenborn.com.ar/public-random-word")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
};

export default getWords;
