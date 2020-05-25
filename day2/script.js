function setTime() {
    const currTime = new Date();
    const HOUR_HAND = document.querySelector('.hour-hand');
    const MINUTE_HAND = document.querySelector('.min-hand');
    const SECOND_HAND = document.querySelector('.second-hand');

    const HOUR = currTime.getHours()%12;
    const MINUTE = currTime.getMinutes();
    const SECOND = currTime.getSeconds();

    HOUR_HAND.style.transform = `rotate(${(HOUR*30) + 90}deg)`;
    MINUTE_HAND.style.transform = `rotate(${(MINUTE*6) + 90}deg)`;
    SECOND_HAND.style.transform = `rotate(${(SECOND*6) + 90}deg)`;
}

setInterval(setTime,1000);

setTime();
