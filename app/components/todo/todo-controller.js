import TodoService from "./todo-service.js";



var todoService = new TodoService()
// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawList)
}

function drawList(list) {
	
	let template = `
		<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<input type="text" name="description" placeholder="Add to-do's here!">
		<button type="submit">Submit</button
		</form>
	`
	for (let i = 0; i < list.length; i++) {
		const todo = list[i];
        template +=
		`
		<div>
		<p>${todo.user}</p>
		<p>${todo.description}</p>
		<p>${todo.completed}</p>
		<div>
		`
		
	}
	document.getElementById('todo').innerHTML = template
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	
	//DONT FORGET TO LOOP
}


export default class TodoController {
	constructor() {
	    getTodos()
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
		// ask the service to run the remove todo with this id

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
