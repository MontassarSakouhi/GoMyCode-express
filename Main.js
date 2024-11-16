

const express = require('express');
const app = express();
const currentDate = new Date();
// console.log(currentDate.getDay())


const middleware = (req, res, next) => {
    if (currentDate.getDay() != 0 && (currentDate.getHours() >= 9 && currentDate.getHours() <= 17)) {
        console.log('you got access')
        next()
    }
    else { res.send("You don't have access ") }
}




app.use(express.static(__dirname));

app.get('/home', middleware, (req, res) => {


    res.sendFile(__dirname + "/home.html", (err) => err ? console.log(err) : console.log('file has been loaded'))
})
app.get('/services', (req, res) => {


    res.sendFile(__dirname + "/services.html", (err) => err ? console.log(err) : console.log('file has been loaded'))
})
app.get('/contact', (req, res) => {


    res.sendFile(__dirname + "/contact.html", (err) => err ? console.log(err) : console.log('file has been loaded'))
})

app.listen(3000, function () {

    console.log('The server is running, ' +

        ' please, open your browser at http://localhost:%s',

        3000);

});