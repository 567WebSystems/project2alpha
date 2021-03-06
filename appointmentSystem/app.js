var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRoutes = require('./routes/auth-routes');
var appointmentRoutes = require('./routes/appointment-routes');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
var app = express();
const passport = require('passport');

// mongoDB
mongoose.connect('mongodb+srv://itmd567:'+process.env.MONGODB_PW+'@567websystems-qgpxm.azure.mongodb.net/test?retryWrites=true&w=majority', 
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }  
)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error: ', err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieSession({
  maxAge:24 * 60 * 60 *1000,
  keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/auth',authRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/appointment/view-appointment',appointmentRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
