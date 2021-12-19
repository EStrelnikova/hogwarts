const express = require('express')
const {pool} = require('./pgConfig')
const PORT = process.env.PORT || 8080
const app = express()
app.get('/', (req, res) =>
{
    const sql1 = `select * from задания;`
    pool.query(sql1, (err, resp) =>
    {
        if(err) console.log(err)
        else
        {
            res.render('problemeset.ejs', {rows: resp.rows})
        }
    })
})

app.listen(PORT, ()=> console.log('Приложение слушает порт:', PORT))