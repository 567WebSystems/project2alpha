  // var calendarData = {
  //       'summary': index.param.event.summary,
  //       'location': index.param.event.location,
  //       'description': index.param.event.description,
  //       'start': index.param.startDateObj,
  //       'end': index.param.endDateObj,
  //       'recurrence': index.param.event.recurrence,
  //       'attendees': index.param.event.attendees,
  //       'reminders': index.param.event.reminders
  //    }

  //console.log("scriptJS event is: ", calendarData)
    
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function deleteEvent() {
      return gapi.client.calendar.calendarList.delete({})
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }
    
    function listAllEvents() {
      return gapi.client.calendar.calendarList.list({})
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }

    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "1012259665491-h9mjitf64jabj5b5fm03umu5c6a84t9o.apps.googleusercontent.com"});
    });

      //const {google} = require('googleapis');
      //const calendar = google.calendar({version: 'v3', auth});

      function onSignIn(googleUser) {

        //console.log("Calendar ID: " + calendarList.list())

        console.log("Welcome! You are now signed in.");

        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        $("#appointmentForm").css("display", "block");
      }

      function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });

        $("#appointmentForm").css("display", "none");
      }
//});
    