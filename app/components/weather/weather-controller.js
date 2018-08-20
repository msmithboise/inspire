import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(newFar){
	let template = 
	`
	<div>
	 <p>${newFar}°<p>
	 
	</div>
	`
	document.getElementById("weather").innerHTML = template
}


function drawWeatherCity(weatherCity){
	let template = 
	`
	<div>
	 <p>${weatherCity}<p>
	 
	</div>
	`
	document.getElementById("city").innerHTML = template
}

function drawWeatherIcon(weatherIcon){
	let template = 
	`
	<div>
	 <img src="http://openweathermap.org/img/w/${weatherIcon}.png">
	 
	</div>
	`
	document.getElementById("icon").innerHTML = template
}


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
		
		this.getWeatherCity()

		weatherService.getWeatherCity(drawWeatherCity)
		
		weatherService.getWeather(drawWeather)

		weatherService.getWeatherIcon(drawWeatherIcon)
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			//What can you do with this weather object?
		})
	}

	getWeatherCity(){
		weatherService.getWeatherCity(city =>{
			console.log(city);
		})
	}

	getWeatherIcon(){
		weatherService.getWeatherIcon( icon => {
			console.log(icon);
		})
	}
}
