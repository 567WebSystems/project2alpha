<<<<<<< HEAD
console.log("loaded scripts.js")
=======
//validates the appointment form before proccessing further
function formValidation(){
  var error = document.getElementById('error');
  if(document.getElementById('summary').value == ""){
    document.getElementById('summary').focus();
    error.style.display = "block";
    error.innerHTML = "Summary can't be empty."
    return false;
  }
  if(document.getElementById('location').value == ""){
    document.getElementById('location').focus();
    error.style.display = "block";
    error.innerHTML = "Location can't be empty."
    return false;
  }
  if(document.getElementById('description').value == ""){
    document.getElementById('description').focus();
    error.style.display = "block";
    error.innerHTML = "Description can't be empty."
    return false;
  }
  if(document.getElementById('startDate').value == ""){
    document.getElementById('startDate').focus();
    error.style.display = "block";
    error.innerHTML = "Enter valid Date mm/dd/YYYY"
    return false;
  }
  if(document.getElementById('startTime').value == ""){
    document.getElementById('startTime').focus();
    error.style.display = "block";
    error.innerHTML = "Enter valid time HH:mm:ss"
    return false;
  }
  if(document.getElementById('endDate').value == ""){
    document.getElementById('endDate').focus();
    error.style.display = "block";
    error.innerHTML = "Enter valid Date mm/dd/YYYY"
    return false;
  }
  if(document.getElementById('endTime').value == ""){
    document.getElementById('endTime').focus();
    error.style.display = "block";
    error.innerHTML = "Enter valid time HH:mm:ss"
    return false;
  }
  if(document.getElementById('recurrence').value == "" || document.getElementById('recurrence') <= 0){
    document.getElementById('recurrence').focus();
    error.style.display = "block";
    error.innerHTML = "Recurrence can't be empty."
    return false;
  }
  if(document.getElementById('attendees').value == ""){
    document.getElementById('attendees').focus();
    error.style.display = "block";
    error.innerHTML = "Attendees can't be empty."
    return false;
  }
  if(document.getElementById('reminders').value == ""){
    document.getElementById('reminders').focus();
    error.style.display = "block";
    error.innerHTML = "Reminders can't be empty."
    return false;
  }
  return true;
}

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

function listEvents() {
    return gapi.client.calendar.calendarList.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
}
>>>>>>> 1bd5e3f3d92ef105988c1c769be6787799b5bb57
