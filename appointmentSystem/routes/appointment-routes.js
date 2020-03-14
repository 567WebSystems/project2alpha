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
  
    startDateObj = new Date(rb.startTime +" "+ rb.startDate);
    endDateObj = new Date(rb.endTime +" "+ rb.endDate);
  
    // console.log(Date(startDateObj.getTimezoneOffset()));
    // console.log(Date(endDateObj.getTimezoneOffset()));
  
    console.log("startDateObj is: " + startDateObj);
    console.log("endDateObj is: " + endDateObj);

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