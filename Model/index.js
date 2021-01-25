const express = require('express')
const app = express()
const twig = require('twig')
const bodyParser = require("body-parser");
const morgan = require('morgan')('dev')
const port = 8080
const mysql = require('mysql')
const connection = mysql.createConnection({
    host : 'localhost',
    database : 'nodejs',
    user : 'root',
    password : ''
})

app.use(morgan)
app.use(express.static(__dirname+'/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/',((req, res) => {
    res.render('Accueil.twig',{})
}))

app.get('/PlusCourtChemin',((req, res) => {
    res.render('PlusCourtChemin.twig',{})
}))

app.get('/login',(req, res) => {
    res.render('loginForm.twig',{})
})

app.get('/rank', (req, res) => {
    connection.query("SELECT * from JOUEUR", (err, list) => {
        if (!err) {
            res.render('rank.twig', {joueurs: list})
        } else {
            res.send(err)
        }
    })
})

app.post('/login', (req, res) => {
    var donnees = {
        nom: req.body.nom,
        age: req.body.age
    }

    var query = "INSERT INTO joueur(nom,age,score) values ('" + donnees['nom'] + "','" + donnees['age'] + "','0');"
    connection.query(query, (err) => {
        if (!err) {
            res.redirect("/jeu1")
        } else res.send(err)
    })
})

app.get('/Classement',((req, res) => {
    res.render('Classement.twig',{})
}))

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Listening on : ${port}`)
})