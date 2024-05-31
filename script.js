const generatorBt = document.getElementById('generator');
const resultHolder = document.getElementById('result');
generatorBt.onclick = generateExcuse

const activities = ["un desfile", "una manifestación"];
const participants = ["bomberos", "enanos", "payasos", "evangélicos", "reggaetoneros"];

function generateExcuse(){
    const i = random(activities.length);
    const j = random(participants.length);
    let result = `${activities[i]} de ${participants[j]}` //add emoji puntuation? 💀
    resultHolder.textContent = result;
}

function random(maxExclusive){
    return Math.floor(Math.random() * maxExclusive);
}