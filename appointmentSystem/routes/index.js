const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/event_model');
var calendarData = {};
var startDateObj;
var endDateObj;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index')

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
    res.render('index')

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
  gCal(calendarData);

  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
  });

  
});

module.exports = router;


function gCal(calendarData) {
  if (calendarData) {
    const fs = require('fs');
    const readline = require('readline');
    const {google} = require('googleapis');

    // If modifying these scopes, delete token.json.
    const SCOPES = ['https://www.googleapis.com/auth/calendar'];
    //const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    const TOKEN_PATH = 'token.json';

    // Load client secrets from a local file.
    fs.readFile('credentials.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Calendar API.
      // authorize(JSON.parse(content), listAllEvents);
      authorize(JSON.parse(content), listEvents);
      authorize(JSON.parse(content), insertEvents);

    });


    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
    function authorize(credentials, callback) {
      const {client_secret, client_id, redirect_uris} = credentials.installed;
      const oAuth2Client = new google.auth.OAuth2(
          client_id, client_secret, redirect_uris[0]);

      // Check if we have previously stored a token.
      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
      });
    }


    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback for the authorized client.
     */
    function getAccessToken(oAuth2Client, callback) {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      });
      console.log('Authorize this app by visiting this url:', authUrl);
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
          if (err) return console.error('Error retrieving access token', err);
          oAuth2Client.setCredentials(token);
          // Store the token to disk for later program executions
          fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
            if (err) return console.error(err);
            console.log('Token stored to', TOKEN_PATH);
          });
          callback(oAuth2Client);
        });
      });
    }

    /**
     * Lists the next 10 events on the user's primary calendar.
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    function listEvents(auth) {
      const calendar = google.calendar({version: 'v3', auth});
      //console.log("calendarList is: " + calendar.calendarList.list);
      calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
          console.log('Upcoming 10 events:');
          events.map((event, i) => {
            const start = event.start.dateTime || event.start.date;
            console.log(`${start} - ${event.summary}`);
          });
        } else {
          console.log('No upcoming events found.');
        }
      });
    }

    function insertEvents(auth) {

      const calendar = google.calendar({ version: 'v3', auth });

      //console.log(calendarData);
      var event = {
        'summary': calendarData.summary,
        'location': calendarData.location,
        'description': calendarData.description,
        'start': {
          //'dateTime': calendarData.start + ':00-07:00',
          dateTime: startDateObj,
          'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        'end': {
          //'dateTime': calendarData.end + ':00-07:00',
          dateTime: endDateObj,
          'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        'recurrence': [
          'RRULE:FREQ=DAILY;COUNT='+calendarData.recurrence,
        ],
        'attendees': [
          calendarData.attendees
        ],
        'reminders': [
          calendarData.reminders
        ]
      };

      calendar.events.insert({
        auth: auth,
        calendarId: 'primary',
        resource: event,
      }, function(err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          return;
        }
        console.log('Event created: %s', calendarData.summary);
      });

    }

    // Make sure the client is loaded and sign-in is complete before calling this method.
  // function listAllEvents() {
  //   return gapi.client.calendar.calendarList.list({})
  //       .then(function(response) {
  //               // Handle the results here (response.result has the parsed body).
  //               console.log("Response", response);
  //             },
  //             function(err) { console.error("Execute error", err); });
  // }
  // gapi.load("client:auth2", function() {
  //   gapi.auth2.init({client_id: "721662891407-m2p7me92ecd0ruci948val1njj4prh7n.apps.googleusercontent.com"});
  // });

   }
}