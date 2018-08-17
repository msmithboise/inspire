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

		 <div>
		  <button class="toggle" onclick="app.controllers.quoteController.clickButton(${quote.author})">See Author</button>
		  <p>${quote.author}</p>
		 
		</div>
		  
		  
	</div>	  
	  `
	  document.getElementById("quote").innerHTML = template
	}


	function clickButton() {
		var click = document.getElementsByClassName('toggle');
		if (click.style.visibility === 'hidden') {
			click.style.visibility = 'visible';
		} else {
			click.style.visibility = 'hidden';
		}
	}
	
	clickButton()



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
