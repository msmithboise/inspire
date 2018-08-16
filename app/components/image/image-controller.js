import ImageService from "./image-service.js"

let imageService = new ImageService
//Your ImageService is a global class what can you do here to instantiate it?


export default class ImageController {
constructor(){
    this.getImage()
}
    getImage(){
    imageService.getImage(data =>{
        console.log('CONTROLLER: ', data)
    })
        
    }
    
}

