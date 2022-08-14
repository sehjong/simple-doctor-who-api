const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let theDoctors = {
    'first doctor': {
        'portrayedBy': 'William Hartnell',
        'tenure': '1963 - 1966',
        'series': 'seasons 1 - 4',
        'episodes': 134
    },
    'second doctor': {
        'portrayedBy': 'Patrick Troughton',
        'tenure': '1966 - 1969',
        'series': 'seasons 4 - 6',
        'episodes': 119
    },
    'third doctor': {
        'portrayedBy': 'Jon Pertwee',
        'tenure': '1970 - 1974',
        'series': 'seasons 7 - 11',
        'episodes': 128
    },
    'fourth doctor': {
        'portrayedBy': 'Tom Baker',
        'tenure': '1974 - 1981',
        'series': 'seasons 12 - 18',
        'episodes': 172
    },
    'fifth doctor': {
        'portrayedBy': 'Peter Davison',
        'tenure': '1982 - 1984',
        'series': 'seasons 19 - 21',
        'episodes': 69
    },
    'sixth doctor': {
        'portrayedBy': 'Colin Baker',
        'tenure': 1984 - 1986,
        'series': 'seasons 21 - 23',
        'episodes': 31
    },
    'seventh doctor': {
        'portrayedBy': 'Sylvester McCoy',
        'tenure': '1987 - 1989',
        'series': 'seasons 24 - 26',
        'episodes': 42
    },
    'eighth doctor': {
        'portrayedBy': 'Paul McGann',
        'tenure': '1996',
        'series': 'film',
        'episodes': 2
    },
    'ninth doctor': {
        'portrayedBy': 'Christopher Eccleston',
        'tenure': '2005',
        'series': 'season 1',
        'episodes': 13
    },
    'tenth doctor': {
        'portrayedBy': 'David Tennant',
        'tenure': '2005 - 2010',
        'series': 'seasons 2 - 4',
        'episodes': 47
    },
    'eleventh doctor': {
        'portrayedBy': 'Matt Smith',
        'tenure': '2010 - 2013',
        'series': 'seasons 5 - 7',
        'episodes': 44
    },
    'war doctor': {
        'portrayedBy': 'John Hurt',
        'tenure': '2013',
        'series': '50th Anniversary Special',
        'episodes': 1
    },
    'twelfth doctor': {
        'portrayedBy': 'Peter Capaldi',
        'tenure': '2014 - 2017',
        'series': 'seasons 8 - 10',
        'episodes': 40
    },
    'thirteenth doctor': {
        'portrayedBy': 'Jodie Whittaker',
        'tenure': '2018 - 2022',
        'series': 'seasons 11 - 13',
        'episodes': 30
    },
    'fourteenth doctor': {
        'portrayedBy': 'Ncuti Gatwa',
        'tenure': '2023 - ',
        'series': 'seasons 14 - ',
        'episodes': 0
    },
    'unknown': {
        'portrayedBy': 'unknown',
        'tenure': 'unknown',
        'series': 'unknown',
        'episodes': 0
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css')
})

app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:name', (req, res) => {
    const theDoctor = req.params.name.toLowerCase()
    if(theDoctors[theDoctor]) {
        res.json(theDoctors[theDoctor])
    } else {
        res.json(theDoctors['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})