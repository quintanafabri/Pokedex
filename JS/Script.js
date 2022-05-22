const Pokedex_URL = "https://quintanafabri.github.io/pokemon-data/pokedex.json" 
let  PokedexData = {};// Lugar donde guardamos los datos del archivo JSON
let PokemonID = 0; // Lugar que ocupa en el JSON "Pokedex.json"
let puntuacion = 0;





function numeroRandomMath() {  // Funcion para generar el numero random y asignar ese numero a PokemonID.
    let numero = Math.round( Math.random() * (151 - 0) + 0);
    PokemonID = numero;
    ImagenLoad();
   
}


function ImagenLoad(){ // Funcion que generara la imagen
    let imagenHTML = '';
    let PokemonIDstr = (PokemonID+1).toString(); // pasamos PokemonID a STRING

   const fotoID = PokemonIDstr.padStart(3,"0") // "Rellenamos" para que el numero tenga un formato de 3 digitos
    imagenHTML = `    <img id="imagen" src="https://quintanafabri.github.io/pokemon-data/images/`+fotoID+`.png" alt="">
    `

document.getElementById("foto").innerHTML = imagenHTML;
};


function play(pokemon){//Funcion que devuelve la respuesta si ganaste o perdiste
if (document.getElementById("respuesta").value === PokedexData[PokemonID].name.english){
alert("GANASTE!!!!!!")
puntuacion+=1;
document.getElementById("puntuarText").innerHTML = "Puntuacion: "+puntuacion;

}
else{
    alert("Incorrecto!"+"\n"+"El pokemon es: "+PokedexData[PokemonID].name.english)
}
}





// EVENTOS
document.addEventListener("DOMContentLoaded", function(e){
  // FETCH--Request!
    fetch(Pokedex_URL)
    .then(res => res.json())
    .then(data => {
        PokedexData = data;
    })


    imagenHTML = `    <img id="imagen" src="https://quintanafabri.github.io/pokemon-data/images/810.png" alt="">
    `

document.getElementById("foto").innerHTML = imagenHTML;

    
});