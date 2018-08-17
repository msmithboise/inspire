import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {
	// let template = ''
	// for (let i = 0; i < quote.length; i++) {
	//   let newQuote = quote[i];
	//   console.log(newQuote)
	 let template =
	   `
	  <div>

		  <p>${quote.quote}</p>
		  <p>${quote.author}</p>
		 
		  
		  
	</div>	  
	  `
	  document.getElementById("quote").innerHTML = template
	}


export default class QuoteController {
	constructor() {
		this.getQuote()
		

		qs.getQuote(drawQuote)
	}

	getQuote() {
		qs.getQuote(function (quote) {
			console.log('What is the quote', quote)
		})
	}
}
