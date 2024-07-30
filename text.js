const axios = require('axios'); 

const url = 'https://inportant.farmseller.in/youtube-info';
const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 

axios.post(url, { url: youtubeUrl })
    .then(response => {
        console.log(response.data)
        console.log(response.data.title);

        
    })
   