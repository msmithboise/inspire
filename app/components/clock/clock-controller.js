import ClockService from "./clock-service.js"

let clockService = new ClockService


function drawClock(clock) {

    let template =
       
        `
        <div>
        <p>${clock.dayOfTheWeek}</p>
        </div>
        `

    document.getElementById('day').innerHTML = template
}



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h > 12) {
        h -= 12
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
startTime()


function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
checkTime()

function greet() {
    var today = new Date()
    var curHr = today.getHours()
    
    if (curHr < 12) {
        let template =
        `
        <div>
        <p class="greet">Good Morning, Michael</p>
        </div>
        `
        document.getElementById('greeting').innerHTML = template



       
    } else if (curHr < 18) {
        let template =
        `
        <div>
        <p class="greet">Good Afternoon, Michael</p>
        </div>
        `

        document.getElementById('greeting').innerHTML = template
        
    } else {
        let template =
        `
        <div>
        <p class="greet">Good Evening, Michael</p>
        </div>
        `

        document.getElementById('greeting').innerHTML = template
    }
}

greet()



export default class ClockController {
    constructor() {
        clockService.getClock(drawClock)
    }



}
