const hora = document.querySelector(".hora");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

function alterHour(){
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hora.textContent = hour;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    console.log(hora,minutos,segundos);
}

setInterval(() => {
    alterHour();
}, 1000);
