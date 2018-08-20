import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ClockController from "./components/clock/clock-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS?? X
export default class App {
  constructor() {
    console.log("hello from main!")
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      todoController: new TodoController(),
      clockConroller: new ClockController()


    }
  }
}

window.app = new App()  