const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
<<<<<<< HEAD
const functions = require('../controller/functions');
=======
>>>>>>> 44b680116b219700100495e3ee484d726a348964


const gCalendar = require('../controllers/gCalendar');
const Event = require('../models/event_model');

var calendarData = {};
var startDateObj = "text";
var endDateObj = "text";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post("/", function(req, res){
<<<<<<< HEAD
  let rb = req.body;

  startDateObj = new Date(rb.startTime + rb.startDate);
  endDateObj = new Date(rb.endTime + rb.endDate);

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
    res.render('index');

   // res.status(201).json({
    var status = {
      message: 'Event stored to DB.',
      //redirect: "http://localhost:3000",
      storedEvent: {
        summary: result.summary,
        location: result.location,
        description: result.description,
        start: startDateObj,
        end: endDateObj,
        recurrence: result.recurrence,
        attendees: result.attendees,
        reminders: result.reminders,
      } 
    }
   // })
   console.log(status);

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

  console.log(calendarData);
  functions.gCal(calendarData);
=======
    let rb = req.body;
  
    startDateObj = new Date(rb.startDate + " " + rb.startTime);
    endDateObj = new Date(rb.endDate + " " + rb.endTime);
>>>>>>> 44b680116b219700100495e3ee484d726a348964

  
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
<<<<<<< HEAD
  });
});

module.exports = {router, functions};
=======
  
    console.log("event is: " + event)
    console.log("Attempting to store in db...")
    return event.save() // store event in db
  
    .then(result => {
      console.log(result); // display stored event
      res.render('appointment')
  
      var status = {
        message: 'Event stored to DB.',
      }
  
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

module.exports = router;
>>>>>>> 44b680116b219700100495e3ee484d726a348964
