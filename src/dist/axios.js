import axios from 'axios'

const axois = axios.create({
    baseURL: 'http://api-meme-zendvn-01.herokuapp.com/api/',
    headers: {
        'accept': 'application/json'
    }
  });
  export default axois;