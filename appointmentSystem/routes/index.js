var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post("/", function(req, res){
  var calendarData = {
    summary: req.body.summary,
    location: req.body.location,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    recurrence: req.body.recurrence,
    attendees: req.body.attendees,
    reminders: req.body.reminders
  };
  console.log(calendarData);
  res.render('index');
});

module.exports = router;
