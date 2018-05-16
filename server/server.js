/////***********Require***************//////
var url = require('url');
var express = require('express');

var cors = require('cors');

var app = express();
var http = require('http').Server(app);
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session')

var https = require('https');

var multer = require('multer')
var upload = multer({
    dest: __dirname + 'uploads/'
})
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
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
    }
}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
/*
var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
*/

app.use("/uploads", express.static(__dirname + '/uploads'));

/////***********END App Use***************//////

/////***********Routes***************//////
var authRouter = require('./routers/AuthRouter').authRouter;
app.use('/auth', authRouter);

var authConstantsRouter = require('./routers/adminRoutes/AuthConstantsRoute').authConstantsRouter;
app.use('/authConstants', authConstantsRouter);
/////***********END Routes***************//////


/////***********APP METHODS***************//////
app.all('*', function(req, res, next) {
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

app.post('/upload', upload.single('file'), function(req, res, next) {
    if (req.file != undefined) {
        var tempPath = req.file.path;
        var tempName = req.file.originalname;
        var random = Math.random().toString(36).replace(/[^1-9]+/g, '').substr(0, 5);
        var imgPath = 'uploads/' + random + '-' + tempName
        var targetPath = path.resolve('uploads/' + random + '-' + tempName);
        if (path.extname(tempName).toLowerCase() === '.png' || path.extname(tempName).toLowerCase() === '.jpg' || path.extname(tempName).toLowerCase() === '.jpeg') {
            fs.rename(tempPath, targetPath, function(err) {
                if (err) {
                    console.log('ERROR: ' + JSON.stringify(err));
                    
                }
                console.log("Upload completed!");
                
                var para = req.body;
                para['url'] = 'http://localhost:8282/' + imgPath;
                console.log(req.headers);
                
                res.send(para);
            });
        } else {
            fs.unlink(tempPath, function(err) {
                if (err) throw err;
                console.error("Only .png files are allowed!");
                res.send('Only .png files are allowed!');
            });
        }
    } else {
        var para = req.body;

        res.send('File not found.');
    }

})
/////***********END APP METHODS***************//////
