const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 9000
app.use(cors())

const myfakeData = require('./MYData/myfakeData.json')

app.get('/', (req, res) => {
    res.send('MY Online Tuition Platfor in running')
});
app.get('/displayData', (req, res) => {
    res.send(myfakeData)
})
app.listen(port, () => {
    console.log('My online tuition platform in running,', port)
})