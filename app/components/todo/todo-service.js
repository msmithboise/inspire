import Todo from "../models/todo.js"

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Michael/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {


	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get()
		.then((res) => { // <-- WHY IS THIS IMPORTANT????
			
			todoList = res.data.data.map(rawList => {
				return new Todo(rawList)
			})

			draw(todoList)
		})
		.catch(logError)
	}


	addTodo(todo, cb) {
		// WHAT IS THIS FOR???
		todoApi.post( '', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				cb()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = todoList.find(todo=> todo._id ==todoId)
		todo.completed = !todo.completed 

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				getTodos()
				
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, draw) {
todoApi.delete(todoId)
.then(res => {
	this.getTodos(draw)
})

		// Umm this one is on you to write.... The method is a DELETE

	}

}
