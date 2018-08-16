import ImageService from "./image-service.js"

let imageService = new ImageService
//Your ImageService is a global class what can you do here to instantiate it?

function drawImage(imgUrl){
   
    document.getElementById("background").style.backgroundImage = `url('${imgUrl}')`; 
}

// come back to this make a background image

export default class ImageController {
constructor(){
    imageService.getImage(drawImage)

     

}
//     getImage(){
//     imageService.getImage(data =>{
//         console.log('CONTROLLER: ', data)
        
//     })
        
//     }

    
}

