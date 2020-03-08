const appRoutes = require('../routes/appointment-routes');

// Make sure the client is loaded and sign-in is complete before calling this method.
function deleteEvent() {
  return gapi.client.calendar.calendarList.delete({})
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}

gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "1012259665491-h9mjitf64jabj5b5fm03umu5c6a84t9o.apps.googleusercontent.com"});
});

module.exports = deleteEvent;