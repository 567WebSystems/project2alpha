const router = require('express').Router();
const mongoose = require('mongoose');
const gCalendar = require('../controllers/gCalendar');
//import * as say from '../controllers/gCalendar';
const Event = require('../models/event_model');
var calendarData = {};
var startDateObj = "text";
var endDateObj = "text";

// functions.HelloWorld;
// x = functions.HelloWorld;
// console.log(x)
// console.log("HelloWorld is: ", typeof(HelloWorld));

const authCheck = (req,res, next) =>{
    if(!req.user){
        // if user is not logged in
        res.redirect('/');
    }else{
        next();
    }
};

router.get('/',authCheck,(req,res)=>{
    res.render('appointment',{user:req.user.userName});
});

router.post("/", function(req, res){
    let rb = req.body;
  
    // startDateObj = '2020-05-28T09:00:00-07:00';
    // endDateObj =  '2020-05-28T09:00:00-07:00';
  
    startDateObj = new Date(rb.startDate + " " + rb.startTime);
    endDateObj = new Date(rb.endDate + " " + rb.endTime);
  
    //console.log(new Date(startDateObj).toISOString);
    //console.log(new Date(endDateObj).toISOString);

    // console.log(Date(startDateObj.getTimezoneOffset()));
    // console.log(Date(endDateObj.getTimezoneOffset()));
  
    console.log("startDateObj is: " + startDateObj);
    console.log("endDateObj is: " + endDateObj);
  
    const event = new Event({ // parse event
      _id: mongoose.Types.ObjectId(),
      summary: rb.summary,
      location: rb.location,
      description: rb.description,
      start: startDateObj,
      end: endDateObj,
      recurrence: rb.recurrence,
      attendees: rb.attendees,
      reminders: rb.reminders,
    });
  
    console.log("event is: " + event)
    console.log("Attempting to store in db...")
    return event.save() // store event in db
  
    .then(result => {
      console.log(result); // display stored event
      res.render('appointment')
  
     // res.status(201).json({
      var status = {
        message: 'Event stored to DB.',
        //redirect: "http://localhost:3000",
        // storedEvent: {
        //   summary: result.summary,
        //   location: result.location,
        //   description: result.description,
        //   start: startDateObj,
        //   end: endDateObj,
        //   recurrence: result.recurrence,
        //   attendees: result.attendees,
        //   reminders: result.reminders,
        // } 
      }
     // })
  
     console.log("status: " + status.message)
  
  
   calendarData = {
      _id: mongoose.Types.ObjectId(),
      'summary': rb.summary,
      'location': rb.location,
      'description': rb.description,
      'start': startDateObj,
      'end': endDateObj,
      'recurrence': rb.recurrence,
      'attendees': rb.attendees,
      'reminders': rb.reminders
   }
  
    console.log("calendarData is: ", calendarData);
    gCalendar(calendarData);
    //functions.googleCal;
    
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
    });
  
    
  });

//module.exports.router;

function showStartObj() {
  return startDateObj;
};

function showEndObj() {
  return endDateObj;
};

x = showStartObj();
y = showEndObj();
// console.log("X is: ", x)
// console.log("Y is: ", y)


module.exports = router, {
  showStartObj: function() { return startDateObj }, 
  showEndObj: function() { return endDateObj }
};