// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  function devolverMayuscula(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
  return devolverMayuscula(nombre);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  /*function invocarcb(user, call){
    return cb(user);
  }
  return invocarCallback(user,cb);*/
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function invocarcb(dato1,dato2,func){
    return func(dato1,dato2);
  }
  return invocarcb(n1,n2,cb);
  //return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumatoria = numeros.reduce(function(acumulador,elemento){
    return acumulador + elemento;
  }, 0);
  cb(sumatoria);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    return cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = [];
  nuevoArray = array.map(function(elemento){
    return cb(elemento);
  });
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  for(let i = 0 ; i < array.length; i++){
    if (array[i][0] === "a"){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
