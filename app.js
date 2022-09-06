let requestName = new XMLHttpRequest();

let jsonPokedex;

let pokemonNumber;
let pokemonIndex;

//Transformando o texto em JSON para pegar os nomes dos pokemons via JSON
requestName.addEventListener('readystatechange', ()=>{
    if(requestName.readyState === 4 && requestName.status === 200){
        jsonPokedex = JSON.parse(requestName.responseText);
        
        writeNames();
        
    }
})

//Abrindo o request de nomes
requestName.open("get", "https://pokeapi.co/api/v2/pokemon?limit=251&offset=0s", true);
requestName.send();

// Função que escreve os nomes dos pokemons
const writeNames = () => {
    for(let i = 0; i < jsonPokedex['results'].length; i++){
        pokemonNumber = (i+1).toLocaleString('pt-BR', {minimumIntegerDigits: 3});
        pokemonIndex = ` ${pokemonNumber} - ${jsonPokedex['results'][i].name}<br>`
        document.write(pokemonIndex);
    }

}