/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



const filterData= (data2,condition) => {
    let filter = data2.filter(element =>{
      return (element.tags).includes(condition) === true;
    })
     return filter ;
    };
    
    window.filterData = filterData;

