//Autor: Julian Murillo
//Descripcion: Ejercicio 3: Obtencion de datos

//////////////////////////////////////////////////////////////////////
let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};


const getProductDataForm = () => {
     productName = document.getElementById("productName").value;
     productType = document.getElementById("productType").value;
     quantity = document.getElementById("quantity").value;
     price = document.getElementById("price").value;
     latitude = document.getElementById("latitude").value;
     longitude = document.getElementById("longitude").value;
     console.log(productName, productType, quantity, price, latitude, longitude);
    
     
}

const buildProductDataForRequest = () => {
    product = {
        product_name: productName,
        product_type: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude
    };
   console.log(product);
}

