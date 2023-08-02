let timer = document.querySelector('.timer')

let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')


let time;
let mn = 0;
let sc = 0;
let ms = 0;


start.addEventListener('click', () => {
    time = setInterval(() => {
        ms += 10
        if (ms === 990) {
            ms = 0;
            sc++;
        }
        if (sc === 59) {
            sc = 0;
            mn++;
        }
        timer.innerHTML = mn + ":" + sc + ":" + ms;
    }, 10);

})


stop.addEventListener('click', () => {
    clearInterval(time);
});

reset.addEventListener('click', () => {
    clearInterval(time);
    mn = 0;
    sc = 0;
    ms = 0;
    timer.innerHTML = "00:00:00";
});