const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

function tempConverter(far){
var newTemp = (far * 9/5) 
let newFar = newTemp - 459.67
return Math.floor(newFar)
}

export default class WeatherService {
constructor(){

	

}
	getWeather(callback) {
		console.log('Calling the Weatherman')
		weatherApi().then(function (res) {
			// localStorage.setItem('weather', JSON.stringify(res.data))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
			// res.data.temp is the temperature in Kelvin
			// You should probably convert the temperature data to either F or C
			
			let far = tempConverter(res.data.main.temp)
			callback(far);
		})
	}

	getWeatherCity(cb) {
		
		weatherApi().then(function(res){
			let weatherCity = res.data.name
			cb(weatherCity);
		})

	}

	

	
	
}



