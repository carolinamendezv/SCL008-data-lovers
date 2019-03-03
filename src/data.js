/* Manejo de data 

 esta es una función de ejemplo
 puedes ver como agregamos la función a nuestro objeto global window*/ 
 
const data2 = Object.values(data1);

function filter(data2, condition){
const dataShow = data2.filter((element)=>{
    return element[1].tags.includes(condition) === true;
    
});

return dataShow;
}
