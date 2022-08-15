document.addEventListener('DOMContentLoaded', () => {
    const secondsDisplay = document.querySelector('.seconds');
    const minutesDisplay = document.querySelector('.minutes');
    const hoursDisplay = document.querySelector('.hours');
    const dividers = document.querySelectorAll('.divider');

    function setTime(){
        const currTime = new Date();
        const seconds = currTime.getSeconds();
        const minutes = currTime.getMinutes();
        const hours = currTime.getHours();

        secondsDisplay.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        minutesDisplay.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        hoursDisplay.innerHTML = hours < 10 ? '0' + hours : hours;
        
    }

    function handleDividers(){
        dividers.forEach(divider => 
            divider.innerHTML = (divider.innerHTML === '') ? ':' : '');
    }

    setInterval(setTime, 1000);
    setInterval(handleDividers, 500);
})