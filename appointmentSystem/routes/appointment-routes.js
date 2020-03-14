const router = require('express').Router();
const mongoose = require('mongoose');
<<<<<<< HEAD

const gcalFunction = require('../controllers/gcalendar');
=======
const gcalFunction = require('../controllers/gCalendar');
>>>>>>> 1c6d4e1c50679d0607d3acc2ba59f8ac90b95d4a
const Event = require('../models/event_model');

var calendarData = {};
<<<<<<< HEAD
var startDateObj = "text";
var endDateObj = "text";


=======
var startDateObj;
var endDateObj;
>>>>>>> 1c6d4e1c50679d0607d3acc2ba59f8ac90b95d4a
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

    // return gapi.client.calendar.calendarList.list({})
    //   .then(function(response) {
    //           // Handle the results here (response.result has the parsed body).
    //           console.log("Response", response);
    //         },
    //         function(err) { console.error("Execute error", err); });
    // });

router.get('/view-appointment',authCheck,(req,res)=>{
  async function getl(){
    gcalFunction.listEvent(req.user.googleId);
  }
  getl().then(getAppointmentList(res,req));
});

router.post("/view-appointment",authCheck,(req,res)=>{
  let e = req.body.de;
  async function run(){
    gcalFunction.deleteEvent(e);
    gcalFunction.listEvent(req.user.googleId);
  }
  run().then(getAppointmentList(res,req));
});


router.post("/", function(req, res){
    let rb = req.body;
  
<<<<<<< HEAD
    startDateObj = new Date(rb.startDate + " " + rb.startTime);
    endDateObj = new Date(rb.endDate + " " + rb.endTime);

  
    //console.log("startDateObj is: " + startDateObj);
    //console.log("endDateObj is: " + endDateObj);
  
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
      }
  
     console.log("status: " + status.message)
  
=======
    startDateObj = new Date(rb.startTime +" "+ rb.startDate);
    endDateObj = new Date(rb.endTime +" "+ rb.endDate);
  
    // console.log(Date(startDateObj.getTimezoneOffset()));
    // console.log(Date(endDateObj.getTimezoneOffset()));
  
    console.log("startDateObj is: " + startDateObj);
    console.log("endDateObj is: " + endDateObj);

>>>>>>> 1c6d4e1c50679d0607d3acc2ba59f8ac90b95d4a
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
    res.render('appointment',{user:req.user.userName});  
  });
  
  function getAppointmentList(res,req){
    Event.find({userID: req.user.googleId}).exec(function(err, events) {   
      if (err) {
        throw err;
      }else{
      res.render('view-appointment', { "events": events});
      }
    });
  }

router.delete('/',authCheck,(req,res)=>{
  console.log("On delete route...")
  // return gapi.client.calendar.calendarList.delete({})
  // .then(function(response) {
  //         // Handle the results here (response.result has the parsed body).
  //         console.log("Response", response);
  //     },
  //     function(err) { console.error("Execute error", err); });
});

module.exports = router;