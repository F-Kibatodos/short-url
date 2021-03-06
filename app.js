const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRandomString = require('./generate-random')
const Url = require('./models/url')
const { check, validationResult } = require('express-validator')
const websiteValidator = require('./website-validator')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

const mongoose = require('mongoose')
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/shortened-urls',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
)
const db = mongoose.connection

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', websiteValidator(), async (req, res) => {
  const website = req.body.website
  const errors = validationResult(req)
  let loginErrors = ''
  if (!errors.isEmpty()) {
    for (let errormessage of errors.errors) {
      loginErrors += errormessage.msg
    }
  }
  if (loginErrors) {
    res.render('index', {
      loginErrors
    })
  } else {
    const website = req.body.website
    let site = await Url.findOne({ website })
    if (!site) {
      let url = generateRandomString()
      while (await Url.findOne({ url })) {
        url = generateRandomString()
      }
      site = await Url.create({ website, url })
    }
    return res.render('index', { site })
  }
})

app.get('/:url', (req, res) => {
  const url = req.params.url
  Url.findOne({ url }).then(site => {
    if (site) res.redirect(site.website)
    else {
      let urlErrorMsg = '找不到該網址'
      res.render('index', { urlErrorMsg })
    }
  })
})

app.listen(process.env.PORT || 3000)

// 驗證如果亂數重複並重新生成亂數

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
