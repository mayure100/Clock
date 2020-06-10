setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')

function setClock(){
    const currentDate =  new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secondsRatio+ currentDate.getMinutes())/60;

    const hourRatio = (minuteRatio+ currentDate.getHours())/60;

    setRotation(secondsHand,secondsRatio  )
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand,hourRatio )

}

function setRotation(element, rotationRatio){
element.style.setProperty('--rotation',rotationRatio*360)

}