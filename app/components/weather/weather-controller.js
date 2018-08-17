import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(newFar){
	let template = 
	`
	<div>
     <p>${newFar}<p>
	</div>
	`
	document.getElementById("weather").innerHTML = template
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
		
		
		weatherService.getWeather(drawWeather)
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}
}
