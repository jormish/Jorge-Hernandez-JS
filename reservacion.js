
alert('Gana Desayuno gratis por cada pregunta correcta')
let score = 0;

let pregunta = [
    {
        prompt: "Cual es la Capital de E.U:U? \n(a) Washington DC\n\(b) New York\n(c) Los Angeles",
        answer: "a"
    },
    {
        prompt: "Cual es la Capital de E.U:U? \n(a) Washington DC\n\(b) New York\n(c) Los Angeles",
        answer: "a"
    },
    {
        prompt: "Cual es la Capital de E.U:U? \n(a) Washington DC\n\(b) New York\n(c) Los Angeles",
        answer: "a"
    },

]

for (let i=0; i < pregunta.length; i++) {
    let respuesta = prompt(pregunta[i].prompt);
    if (respuesta ==  pregunta [i].answer){
        score++;
        alert("Felicidades!! Ganaste Desayuno Gratis!!")
    }else {
            alert("Incorecto")
        }

    }

alert("Agaraste " + score + "/" + pregunta.length);
alert("Ganaste " + score  + " Desayunos");