let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api

import Quote from '../../components/models/quote.js'

let quote = new Quote()

const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(callWhenDone) {
		quoteApi().then((res) => {
			callWhenDone(res.data)
			console.log(res.data)
		})
	}
}
