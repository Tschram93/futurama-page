const express = require('express');
const app = express();

// app 
app.listen(3001, () => console.log('listening at 3001'));
app.use(express.static('public'));
app.use(express.json({
    limit: '1mb'
}));
// POST
app.post('/api', (request, response) => {
    console.log('I got a request');
    console.log(request.body);
    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    });
});



// insert into body of html

// if ('geolocation' in navigator) {
//     console.log('geolocation is available');
//     geo.getCurrentPosition(position => {
//         console.log(position.coords.latitude);
//         console.log(position.coords.longitude);
//     });
// } else {
//     console.log('geolocation is not available');
// }