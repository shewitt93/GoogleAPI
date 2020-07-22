// google key AIzaSyAtqntwvsZHiwPRmLWcXvFNTydfRvb086Q

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');


var quotes = [
    '"PERFECT IS THE ENEMY OF GOOD." <br> –VOLTAIRE',
    '"I’M STILL LEARNING." <br>  –MICHELANGELO', 
    '"LIFE IS A JOURNEY, NOT A DESTINATION." <br> –RALPH WALDO EMERSON',
    '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE."<br> ―ABIGAIL ADAMS',
    '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF."<br> –RUMI',
    '"BE CURIOUS, NOT JUDGMENTAL."<br> –WALT WHITMAN',
    '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." <br> –ZIG ZIGLAR',
    '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." <br> –UNKNOWN',
    '"NOTHING WILL WORK UNLESS YOU DO." <br> –MAYA ANGELOU',
    '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." <br> –EARL NIGHTINGALE',
    '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." <br> —HENRY FORD',
    '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." <br> –BENJAMIN FRANKLIN',
    '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." <br> ―LEO BUSCAGLIA',
    '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." <br> ―MAHATMA GANDHI',
    '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." <br> –TAMMY BJELLAND'
  ]


var cats = [

    "ginger cat",
    "bengal cat",
]
let masterArray = [{"cats":cats}, {"quotes":quotes}]

app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req,res) => res.send('Hello'))

app.get('/search/:query', (req, res)=>{
    var query = req.params.query;
   
    const item = masterArray.filter(e=>e= Object.keys(query)[0])

    console.log(item[query])





})






























app.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))