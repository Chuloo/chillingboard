var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var Pusher = require('pusher')
var cred = require('./cred')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//port 
var port = 2017;

//send homepage
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

//use static files in body
app.use(express.static(__dirname + '/'))

//configure app server
var pusher = new Pusher(cred.pusher)

var randomPosition = () =>{
    return Math.floor(Math.random()*10)
}

setInterval(() => {
    //define data
    var players = [
        {name:'William', team:'Mercedes', position:randomPosition()},
        {name:'Raphael', team:'Power-Horse', position:randomPosition()},
        {name:'Chris', team:'Aston-Martin', position:randomPosition()},
        {name:'Jupress', team:'MHP', position:randomPosition()},
        {name:'Amillz', team:'BMW', position:randomPosition()},
        {name:'Alex', team:'Monster Energy', position:randomPosition()},
        {name:'Taiwo', team:'Xtacy Night Club', position:randomPosition()},
        {name:'Jacky', team:'Piper', position:randomPosition()},
        {name:'Kuvuki', team:'Chelsea', position:randomPosition()},
        {name:'J.Warugu', team:'Red-Bull', position:randomPosition()},
    ]
    players.sort((a,b)=>{
        return a.position - b.position;
    })
    pusher.trigger('channel', 'event', players)
}, 5000)






//listen on port
app.listen(port, (err,res)=> {
    if(err) throw err;
    console.log(`Listening on port ${port}!!`)
})