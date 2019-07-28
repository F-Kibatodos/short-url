const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRandomString = require('./generate-random')
const Url = require('./models/url')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shortened-urls', {
  useNewUrlParser: true,
  useCreateIndex: true
})
const db = mongoose.connection

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const website = req.body.website
  let errorMsg = ''
  if (website.includes('https') === false) {
    errorMsg += '請勿空白或填入非網址'
    res.render('index', { errorMsg })
  } else {
    Url.findOne({ website }).then(site => {
      if (site) {
        res.render('index', { site, errorMsg })
      } else {
        let randomString = generateRandomString()
        const newUrl = new Url({
          website: website,
          url: randomString
        })
        newUrl.save((err, site) => {
          if (err) return console.error(err)
          res.render('index', { site, errorMsg })
        })
      }
    })
  }
})

app.listen(3000)

/*
app.post('/', (req, res) => {
  const website = req.body.website
  Url.findOne({ website }).then(site => {
    if (site) {
      res.render('index', { site })
    } else {
      const newUrl = new Url({
        website: website,
        url: randomString.toString()
      })
      newUrl.save().then(site => {
        res.redirect('/', { site }).catch(err => {
          console.log(err)
        })
      })
    }
  })
})
*/
