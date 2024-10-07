import Champion from "./champion.js"

// {  Champion }

var champions = [];

const startChampion = async () => {
    
    await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonResponse) {
        for (let champion in jsonResponse.data) {
            let newChampion = new Champion(jsonResponse.data[champion].name);
            champions.push(newChampion);
        }
    });
    console.log(champions);
}

startChampion();