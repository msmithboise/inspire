const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callback) {
		imgApi().then(res => {
			
			let imgUrl = res.data.url
			console.log(imgUrl)
			
			callback(imgUrl)
		// ^^^^^^^ How do you call this function?
		// console.log("http://www.splashbase.co/api/v1/images/random")
			// console.log('Image Data:', res.data)
			//draw(res.data)
		})
	}

	


}
