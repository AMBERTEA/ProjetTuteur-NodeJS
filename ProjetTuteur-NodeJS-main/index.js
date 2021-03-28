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
    res.render('CarrouselPlusCourtChemin.twig')
}))

app.get('/JeuPlusCourtChemin',((req, res) => {
    res.render('JeuPlusCourtChemin.twig')
}))

app.get('/Classement',((req, res) => {

    connection.query('SELECT DISTINCT nom,age,score joueur where score != 0',(err,list)=>{
        if(!err){

            res.render('Classement.twig',{joueurs : list})
        }else{
            res.send(err)
        }
    })
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
app.post('/Classement',(req,res) =>{
    console.log(req.body.hiddenGame)
    if (req.body.hiddenGame === "jeu1" ){
        let preparedStatement = `SELECT DISTINCT nom,age,score FROM joueur where difficulte = "${req.body.diffi}"`
        connection.query(preparedStatement,(err,result) =>{
            if(!err){
                console.log(result)
                res.render('Classement.twig',{joueurs : result, donneePCC : true})
            }else{
                res.send(err)
            }
        })

    }else{
        //let preparedStatement
        console.log("pa fini")

    }
} )

app.post('/ExplicationPlusCourtChemin', (req, res) => {
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

    var query = "INSERT INTO joueur(nom,age,score,difficulte) values ('" + donnees['nom'] + "','" + donnees['age'] + "',0,'"+ req.body.difficulte +"');"
    connection.query(query, (err,list) => {
        if (!err) {
            connection.query(`select * from joueur where nom = "${req.body.nom}"`,(err,result,list)=>{
                if(!err) {
                    res.render('JeuPlusCourtChemin.twig', {nom : req.body.nom,time : req.body.time,age : req.body.age,difficulte : req.body.difficulte})
                } else {
                    res.send(err)
                }
            })
        } else res.send(err)
    })
})


app.get('/JeuSacADos',(req, res) => {
    res.render('VueSacADos.twig')
})

app.get('/testDate',(req, res) => {
    res.render('TestDate.twig',{})
})

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Listening on : ${port}`)
})