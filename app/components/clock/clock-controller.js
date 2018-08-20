import ClockService from "./clock-service.js"

let clockService = new ClockService


function drawClock(clock){
    
    let template = 
    // for (let i = 0; i < clock.length; i++) {
    //     const newClock = clock[i];
    //     template += 
        `
        <div>
        <p>${clock.dayOfTheWeek}</p>
        </div>
        `
        
        document.getElementById('day').innerHTML = template
    }
    




export default class ClockController {
constructor(){
    clockService.getClock(drawClock)
}


    
}
