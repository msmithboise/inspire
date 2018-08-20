import TodoService from "./todo-service.js";



var todoService = new TodoService()
// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawList)
}

function drawList(list) {
	
	let template = `
	<div>
		<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<input type="text" name="description" placeholder="What's crackin?">
		
		</form>
	</div>
	`
	for (let i = 0; i < list.length; i++) {
		const todo = list[i];
		if(!todo.completed){

		
        template +=
		`
		<div>
		

		<h1>${todo.description}</h1>
		<input onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" type="checkbox"></input>


		<div>
		`
		}
		else {
			template += 	`
			<div>
			
			<h1>${todo.description}</h1>
			
	
			<i class="fa fa-trash" aria-hidden="true"><button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Trash it</button></i>
	
			<div>
			`
		}
	}
	document.getElementById('todo').innerHTML = template


	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	
	//DONT FORGET TO LOOP
}

function drawTodoQuantity(list){
	let template = ''
	let quantity = list.length
		
		
		template +=
		`
		<div>
		<p>Items on your list: ${quantity}</p>
		</div>
		`
	
	document.getElementById('quantity').innerHTML = template

}

function drawQuantity(){
todoService.getTodos(drawTodoQuantity)
}

export default class TodoController {
	constructor() {
		getTodos()
		
		drawQuantity()
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}


	
	


	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {

		todoService.removeTodo(todoId, drawList)
		// ask the service to run the remove todo with this id

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	



}
