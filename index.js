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

app.get('/ExplicationPlusCourtChemin',((req, res) => {
    res.render('carouselPlusCourtChemin.twig')
}))

app.get('/JeuPlusCourtChemin',((req, res) => {
    res.render('jeuPlusCourtChemin.twig')
}))

app.post('/PlusCourtChemin',(async (req, res) => {
    await setTimeout(() =>{
        connection.query(`UPDATE joueur set score="${req.body.time}" where nom="${req.body.nom}" and age =${req.body.age}`,(err,list)=>{
            if(!err){
                res.redirect("/")
            }else {
                res.send(err)
            }
        })
    },2000)
}))

app.get('/login',(req, res) => {
    res.render('LoginForm.twig',{})
})
app.get('/rank', (req, res) => {
    connection.query("SELECT * from joueur", (err, list) => {
        if (!err) {
            res.render('PlusCourtChemin.twig', {joueurs: list})
        } else {
            res.send(err)
        }
    })
})

app.post('/login', (req, res) => {
    var time
    if(req.body.time !== null) {
         time = req.body.time
    } else {
        time = 0
    }

    var donnees = {
        nom: req.body.nom,
        age: req.body.age,
        time : req.body.time
    }

    var query = "INSERT INTO joueur(nom,age,score) values ('" + donnees['nom'] + "','" + donnees['age'] + "',0);"
    connection.query(query, (err,list) => {
        if (!err) {
            connection.query(`select * from player where nom = "${req.body.nom}"`,(err,result,list)=>{
                if(!err) {
                    res.render('PlusCourtChemin.twig', {nom : req.body.nom,time : req.body.time,age : req.body.age})
                } else {
                    res.send(err)
                }
            })
        } else res.send(err)
    })
})

app.get('/Classement',((req, res) => {
    res.render('Classement.twig',{})
}))

app.get('/testDate',(req, res) => {
    res.render('TestDate.twig',{})
})

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Listening on : ${port}`)
})