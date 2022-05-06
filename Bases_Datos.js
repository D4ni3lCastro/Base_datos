const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'b1yxasfb8bcfaql1v2ug-mysql.services.clever-cloud.com',
  user:'ugkexj0ujkwje76d',
  password:'9spvcmeut5tLUmIFqW7q',
  database:'b1yxasfb8bcfaql1v2ug'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM `Alumnos`',(err,rows)=>{
    console.log(rows)
  })
  connection.end()
})

app.listen(3000)