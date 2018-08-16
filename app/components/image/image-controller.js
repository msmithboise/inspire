import ImageService from "./image-service.js"

let imageService = new ImageService
//Your ImageService is a global class what can you do here to instantiate it?

function drawImage(imgUrl){
    let template =
    `
    <img src="${imgUrl}" alt="photo">
    `
document.getElementById("body").innerHTML = template    
}

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

