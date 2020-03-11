const router = require('express').Router();
const mongoose = require('mongoose');
const gcalFunction = require('../controllers/gCalendar');

const Event = require('../models/event_model');
var calendarData = {};
var startDateObj;
var endDateObj;

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

router.get('/view-appointment',authCheck,(req,res)=>{
  gcalFunction.listEvent();
  res.render('view-appointment',{user:req.user.userName});
});

router.post("/", function(req, res){
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
  
    console.log(calendarData);
    gcalFunction.insEvent(calendarData);
    res.render('appointment');  
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
    });
  
      
  });

module.exports = router;