var express= require('express');
var app = express();
var bodyParser = require('body-parser');
//var nodemailer= require("nodemailer");
//var smtpTransport = require('nodemailer-smtp-transport');
app.set('view engine','ejs');
var routes= require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.get('/', routes.home);
/*var smtpTransport= nodemailer.createTransport(smtpTransport({
    service:'Gmail',
    auth:{
        user:'suthartarak@gmail.com',
        pass:'idar1999ABCD'
    }
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post('/send-email',function(req,res){
    var mailOptions={
        from:'"tarak"<suthartarak@gmail.com>',
        to:"suthartarak@gmail.com",
        subject:'request',
        text:req.body.toString()
    };
    smtpTransport.sendMail(mailOptions,function(error,info){
        if(error){
            return console.log(error);
        }
        console.log('message sent:' + info.response);
    });
    res.redirect('/');
})*/
app.use(require('body-parser')());

app.post('/process', function(req, res){
    var user_name= req.body.username;
    var email= req.body.email;
    var message= req.body.message;        
    console.log('Name (from visible form field): ' + user_name);    
    console.log('Email (from visible form field): ' + email);   
    console.log('message (from visible form field): ' + message); 
    res.redirect('/'); 
}); 

app.get('*',routes.notFound);

app.listen(3000,function(){
    console.log("the application is running on localhost:3000 ");
}); 