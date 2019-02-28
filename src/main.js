/* Manejo del DOM */


/*const data1 = LOL.data;
const container = document.getElementById('root');

const data2 = (data1) => {
  data1.forEach(element => {
    container.innerHTML += `<p>{element.name}</p>
    <img="img" src=${element.img}" alt="${element.name}">`
  })
}*/





/*se crean los conts de los botones LOL WORLD Y LOS PERSONAJES
y le agrego posicion para que se ejecuten segun su orden */

const btnworld = document.getElementsByTagName('button')[0];

const btnCharacters = document.getElementsByTagName('button')[1];



//le agrego el evento click para ejecutar la funcion
btnworld .addEventListener('click', () => {
  //se crea contenido dinamico
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += `<h2 >LOL world</h2><br>
  <p class ="subtitle">Leage of Legends  es un tipo de juego MOBA
   (MULTIPLAYER ONLINE BATTLE ARENA).
  Es un genero de videojuegosque se desarrolla en una arena virtual en conexion con otrs jugadores
  para cumplir un objetivo claro y especifico, dominar en  batalla al  otro equipo.
  LOL se juega en equipos de a 5 cada jugador elige un personaje.
  Donde tienen disponible todos los que aparecen en la pagina.
  cada personaje tiene 3 habilidades propias y una 4ta que se conoce como definitiva.
  </p>`

})
 /*Pantalla 2 characteres se le agrega btn select */
//le agrego el evento click para ejecutar la funcion
//y se le agrega btn select para filtrar
btnCharacters.addEventListener('click', () => {
  /*document.getElementById('select-roll').addEventListener('change',() =>{
    let condition = document.getElementById('select-roll').value;
    let result = window.filterData(data,condition);

    container.innerHTML='';
    result.forEach(element => {
      container.innerHtml +=`<p>${element.name}</p>
      <img = "img" src="${element.img}" alt="${element.name}">`
    })

  })*/

  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML +=`<h2 >Characters</h2><br>
  <p>Filtrar por Roll:</p>
  <select id="select-roll">
    <option value="0">Seleccionar...</option>
    <option value="Tirador">Tirador</option>
    <option value="Luchador">Luchador</option>
    <option value="Mago">Mago</option>
    <option value="Tanque">Tanque</option>
    <option value="Apoyo">Apoyo</option>
    <option value="Asesinos">Asesinos</option>
  </select>` ;

});

/*window.onload = data2(data1);*/
/*se crea window.onload para refrescar pag*/

