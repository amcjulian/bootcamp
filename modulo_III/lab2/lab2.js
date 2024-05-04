// // Autor: Julian Murillo
// //Descripcion: Ejercicio 2: Obtencion de datos a traves de API

// /////////////////////////////////////////////////////////////////

const url = 'https://api.github.com/users/mojombo/followers';
const array = []
const getAvatarUrl =() => {
fetch(url)
.then(response => {
// Check if the request was successful
 if (response.ok) {
        return response.json();
    } else {
       throw new Error('Network response was not ok.');
     }
   })
   .then(data => {
     // Use the JSON data
     return console.log(data);
     
   })
   .catch(error => {
     // Handle the error     console.error('There has been a problem with your fetch operation:', error);
  });

 }

 getAvatarUrl();

