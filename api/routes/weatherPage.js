const { router } = require("../../utils/packages")

const https = require("https");

router.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
    // res.send('Hello World');
})

router.post('/weather-report', (req, res)=>{
    // console.log(req.body.location)
    const location = req.body.location
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f16d5c6c3e96cee5d472ccf7ff15f5d9`
    


https.get(url, (response)=>{
    console.log(response.statusCode)

    response.on("data", (data)=>{
    const weatherData = JSON.parse(data);
    const desc = weatherData.weather[0].description;
    const temp = weatherData.main.temp;
    const icon = weatherData.weather[0].icon;
    const image = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    
        
    // res.write(`<h3>The weather report in ${location} is: ${desc}</h3>`)

    // res.write(`<h1>The temperature in ${location} is: ${temp} degree fahrenheit</h1>`)
    
    // res.write(`<img src=${image} alt="weather icon">`
    // )
    res.send(`<h1>The weather report in ${location} is: ${desc}</h1>
    <h3>The temperature is ${temp} degree fahrenheit</h3>
    <img src=${image} alt="weather icon">`)

    })
    

})
})

module.exports = router;