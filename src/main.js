
const data1 = window.LOL;
const data2 = Object.values(data1);
const container = document.getElementById('root');


/*data2 recorre arreglos*/



data2.forEach(element => {
   container.innerHTML += `<p>{element.name}</p>
    <img="img" src=${element.img}" alt="${element.name}">`
  });






/*se crean los conts de los botones LOL WORLD Y LOS PERSONAJES
y le agrego posicion para que se ejecuten segun su orden */

//const btnworld = document.getElementsByTagName('button')[0];

//const btnCharacters = document.getElementsByTagName('button')[1];



//le agrego el evento click para ejecutar la funcion
btnworld .addEventListener('click', () => {
 // se crea contenido dinamico
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += 
});
 /*Pantalla 2 characteres se le agrega btn select */
//le agrego el evento click para ejecutar la funcion
//y se le agrega btn select para filtrar
btnCharacters.addEventListener('click', () => {
  
});

  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML +=


/*document.getElementById('select-roll').addEventListener('change',() =>{
  let condition = document.getElementById('select-roll').value;
  let result = window.filterData(data,condition);

  container.innerHTML='';
  result.forEach(element => {
    container.innerHtml +=`<p>${element.name}</p>
    <img = "img" src="${element.img}" alt="${element.name}">`
  })

})
window.onload = data2(data1);
se crea window.onload para refrescar pag*/

