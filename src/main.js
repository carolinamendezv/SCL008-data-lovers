/*window.onload = () => {*/

const data2= Object.values(window.LOL.data);

const boardCharacters = document.getElementById("board");
document.getElementById("power-type").addEventListener("change", () => {
  let condition = document.getElementById("power-type").value;
  let resultTags=window.filterData(data2,condition);
  boardCharacters.innerHTML ="";
  resultTags.forEach(element => {
    boardCharacters.innerHTML+= `

  <div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>

        <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
      </div>
    </div>`
  });

    