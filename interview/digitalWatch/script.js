let hrElement = document.querySelector('.hour');
let minElement = document.querySelector('.minute');
let secElement = document.querySelector('.second');
let amPmElement = document.querySelector('.ampm');


const runTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = hr>=12 ? "PM" : "AM"

    if(hr < 10)  hrElement.innerHTML = "0"+hr;
    else  hrElement.innerHTML = hr;

    if(min < 10) minElement.innerHTML = "0"+min;
    else minElement.innerHTML = min;

    if(sec < 10) secElement.innerHTML = "0"+sec;
    else secElement.innerHTML = sec;

    amPmElement.innerText = ampm;
}

setInterval(runTime, 1000);
