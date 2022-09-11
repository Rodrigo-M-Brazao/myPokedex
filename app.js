let requestName = new XMLHttpRequest();
let pokedexNumber = prompt('Quantos pokemons você quer ver na pokedex?');
let jsonPokedex;
let pokemonNumber;
let pokemonIndex;

let pokemonAcc = '';
// https://pokeapi.glitch.me/v1/pokemon/1

let contentPokedex = document.querySelector("#content-pokedex");

//Transformando o texto em JSON para pegar os nomes dos pokemons via JSON
requestName.addEventListener('readystatechange', ()=> {
    if(requestName.readyState === 4 && requestName.status === 200){
        jsonPokedex = JSON.parse(requestName.responseText);        
        writeNames();        
    }
})

//Abrindo o request de nome
requestName.open("get", `https://pokeapi.co/api/v2/pokemon?limit=${pokedexNumber}&offset=0`, true);
requestName.send();


// Função que escreve os nomes dos pokemons
const writeNames = () => {
    let jsonPokedexResults = jsonPokedex['results'];
    for(let i = 0; i < jsonPokedexResults.length; i++){
        let number = i+1;
        pokemonNumber = (number).toLocaleString('pt-BR', {minimumIntegerDigits: 3});
        
        pokemonIndex = `<div class = "pokemon-card"><img class= "card-img" alt = "${jsonPokedexResults[i].name}" src= "https://cdn.traction.one/pokedex/pokemon/${number}.png" ><br> ${pokemonNumber} - ${(jsonPokedexResults[i].name).toUpperCase()}</div>`
        pokemonAcc += pokemonIndex;
    }
    contentPokedex.innerHTML = pokemonAcc;
}
