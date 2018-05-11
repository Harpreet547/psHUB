/////***********Require***************//////
var url = require('url');
var express = require('express');
var app = express();
var http = require('http').Server(app);

var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session')

var https = require('https');
/////***********END Require***************//////

/////***********Var***************//////
var privateKey = fs.readFileSync('./sslCertKey/server.key', 'utf8');
var certificate = fs.readFileSync('sslCertKey/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/psbuck';
/////***********END Var***************//////
/////***********LISTEN***************//////
http.listen(8282, function() {
    console.log('Listening on *:8282');
});

httpsServer.listen(8383, function() {
    //console.log(credentials);
    console.log('HTTPS WORKING on 8383');
});
/////***********END LISTEN***************//////

/////***********Mongoose***************//////
mongoose.connect(url);
/////***********END Mongoose***************//////

/////***********App Use***************//////
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'Work Hard',
    resave: true,
    saveUninitialized: false
}));
/////***********END App Use***************//////

/////***********Routes***************//////
var authRouter = require('./routers/AuthRouter').authRouter;
app.use('/auth', authRouter);

var appConstantsRouter = require('./routers/adminRoutes/AppConstantsRoute').appConstantsRouter;
app.use('/appConstants', appConstantsRouter);
/////***********END Routes***************//////


/////***********APP METHODS***************//////
app.all('*', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    //Redirect from HTTP to HTTPS
    /*
   if ( ! req.secure ) {
        var hostWithoutPort;
        if ( req.headers.host ) {
            hostWithoutPort = req.headers.host.split(':')[0];
        } else {
            hostWithoutPort = 'localhost'//defaultHost
        }
        // Permanent redirect for SEO
        return res.redirect('https://' + hostWithoutPort + ':8383' + req.url);
    }
    */
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
    
});

app.get('/', function(req, res) {
    res.send('<h1>PS Buck Server</h1>');
});
/////***********END APP METHODS***************//////
