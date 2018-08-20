import Clock from "../models/clock.js";

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://worldclockapi.com/api/json/utc/now'
const apiUrl = url + encodeURIComponent(url2);


const clockApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ClockService {
    
	getClock(callback) {
      
            clockApi().then((res) => {
                let clock = res.data
    
    
                callback(new Clock(clock))
                
            })

	}

	


}