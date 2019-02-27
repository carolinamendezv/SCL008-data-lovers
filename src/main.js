/* Manejo del DOM */
//const showData =() ={
//const dataOne = window.LOL;
//const dataTwo = Object.values(dataOne.data);
const btnWorld = document.getElementById("button-lol-world");

btnWorld.addEventListener('click',()=>{

  document.getElementById("root").innerHTML =
`<section class= "fondo">
    <h4 class ="titulo-lol">LOL World<h4>
    <article class ="parrafo-lol">
    Leage of Legends  es un tipo de juego MOBA
    (MULTIPLAYER ONLINE BATTLE ARENA).
    
    Es un genero de videojuegosque se desarrolla en una arena virtual en conexion con otrs jugadores
    para cumplir un objetivo claro y especifico, dominar en  batalla al  otro equipo.
    LOL se juega en equipos de a 5 cada jugador elige un personaje.
    Donde tienen disponible todos los que aparecen en la pagina.
    cada personaje tiene 3 habilidades propias y una 4ta que se conoce como definitiva.
    </article>
    </html>`
})