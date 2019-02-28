/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



const filterData= (data,condition) => {
let filter = data.filter(element =>{
  return elementData === condition;
})
 return filter ;
};

window.filterData = filterData;

