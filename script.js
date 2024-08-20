let digitalElement = document.querySelector('.digital');
let segElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let horElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time) {
    if(time < 10) {
        return '0'+time;
    }else{
        return time;
    }
}

setInterval(updateClock, 1000);