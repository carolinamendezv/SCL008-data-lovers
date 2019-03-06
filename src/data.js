
/* Manejo de data

 esta es una función de ejemplo
 puedes ver como agregamos la función a nuestro objeto global window*/


/*function filter(data2, condition){
const resultTags = data2.filter((element)=>{
    return element.tags.includes(condition)===true;

});

return resultTags;
}
*/
const filterData = (data2,condition) => {
  let resultTags = data2.filter(element =>{
    return (element).tags.includes(condition)=== true;
  });
  return resultTags;
 }

window.filterData=filterData;

const sortData =(data2, sortBy, sortOrder)=>{
let orderChampions = data2.sort((a,b)=> {
  return a [sortBy].localeCompare(b[sortBy]);
})
if (sortOrder==="ordenarZa"){
orderChampions.reverse();
}
return orderChampions
}




window.sortData=sortData;


