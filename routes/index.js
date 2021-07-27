
const app = require('fastify')({
  logger: true
})
const getStream = require('get-stream')
const {request} = require('undici')
const debug = require('debug')('weather:index')
let weatherText = ''
const apiKey = process.env.APIKEY
if(null == apiKey) {
  console.error('APIKEY variable not set')
  process.exit(-1)
}
let title = 'FormaServe - f_Weather'

/* GET home page. */
app.get('/', function(req, res, next) {
  debug('--> into index GET')
  res.render('index', {
    title,
    weather: weatherText,
    error: null
  })
})

app.post('/', async function(req, res) {
  debug('--> into index POST')
  let city = encodeURIComponent(`${req.body.city},uk`)
  let url = `http://api.openweathermap.org/data/2.5/weather`

  const {
    statusCode,
    body
  } = await request(`${url}?appid=${apiKey}&q=${city}&units=metric`, {method: 'POST'});
  if(200 != statusCode) {
    res.render('index', {
      title,
      weather: null,
      error: 'Error, please try again (Perhaps include the country, for instance, "Madrid, Spain")'
    })
    return;
  }
  body.setEncoding('utf8')
  let resp = await JSON.parse(await getStream(body))
  debug(resp.main.temp)
  let weatherText = `Weather is ${resp.weather[0].main},
    (${resp.weather[0].description})
    ,
    ${resp.main.temp} degrees in ${resp.name}!`

  res.render('index', {
    title,
    weather: weatherText,
    error: null
  })
})

module.exports = app;
