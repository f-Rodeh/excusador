const generatorBt = document.getElementById('generator');
const resultHolder = document.getElementById('result');
generatorBt.onclick = generateExcuse

const activities = ["un desfile", "una manifestación", "un concurso", "una caravana", "una protesta", "una marcha", "un concurso de baile", "una rifa", "un camioncito"];
const participants = ["bomberos", "enanos", "payasos", "evangélicos", "reggaetoneros", "juegos de azar y mujerzuelas", "narcos", "marihuanos", "botargas", "Dr. Simis", "la USAC", "viejitas", "viejitas sabrosas", "edecanes"];

function generateExcuse(){
    const i = random(activities.length);
    const j = random(participants.length);
    let result = `${activities[i]} de ${participants[j]}` //add emoji puntuation? 💀
    resultHolder.textContent = result;
}

function random(maxExclusive){
    return Math.floor(Math.random() * maxExclusive);
}