var milisseconds = 0;
var seconds = 0;
var minutes = 0;

chronometer = document.getElementById('chronometer');

function display() {
    milisseconds += 10;
    if (milisseconds >= 1000) {
        seconds += Math.trunc(milisseconds / 1000);
        milisseconds = 0
    }
    if (seconds >= 60) {
        minutes += Math.trunc(seconds / 60);
        seconds = 0;
    }

    chronometer.textContent = `${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })},${(milisseconds / 10).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;

    start.disabled = true;
    pause.disabled = false;
}


start.onclick = () => { interval = setInterval(display, 10) };

pause.onclick = () => {
    clearInterval(interval);

    start.disabled = false;
    pause.disabled = true;
}

reset.onclick = () => {
    clearInterval(interval);

    start.disabled = false;
    pause.disabled = false;

    seconds = 0;
    minutes = 0;
    milisseconds = 0;

    chronometer.textContent = '00:00,00';

}