# *Just Do It*! - Final Project Pitch

___
## Summary

Create an appointment-scheduling calendar system with Google integration for personal, commercial, and/or government applications.

___
## Problem

People nowadays integrate a lot of technology into organizing their daily lives. These include note reminders, electronic planner apps, virtual calendars and much more. Although these technologies come in handy, they still require a fair amount of manual work. There are many businesses that deal with clients who set up appointments daily, using some sort of scheduling system. What if users could schedule faster — without the need to manually input appointments on the other end? The problem here is that there should be a faster way to schedule appointments on a user's calendar — without the need to do a lot of typing.

___
## Appetite

The appetite for this project should only be a six-week cycle focusing primarily on the core functionality of sending data from a form to the user's calendar. After the six-week cycle, the time will be used for testing and site design.
___
## Solution

A solution for this project is to create an appointment scheduling web system. The users could fill out a form and book an appointment with another user and vice versa. Essentially they would use their Google account (or other account, after sign-up) to fill out a form. Then that data would submit to the calendar of the person they want to make an appointment with. With this solution, clients will be able to set up their own appointments with anyone that uses this web system without the other end having to document those manually.

Ideally the Google API would be used for allowing authentication to Google accounts. Users could post data under their own alias. There would also be a Google Calendar API which will help to retrieve data from a user's calendar to provide available times for appointments and allow users to book them.
___
### Login

Login screen will allow user to login either with the google account or with the simple sign-in form (requires username and password).

![login_view1](https://user-images.githubusercontent.com/21226482/73808395-677a7800-4795-11ea-813d-e8717856cef7.jpg)

___
### Sign-up

Sign-up form will allow user to create an account manually with a valid email id, username, password and other user information.

![signup_view2](https://user-images.githubusercontent.com/21226482/73808399-6c3f2c00-4795-11ea-889e-1f7a91bbd95b.jpg)

___
### Sign-up Confirmation

![SignUpConfirm1](https://user-images.githubusercontent.com/21226482/73970800-66eff780-48e3-11ea-9d10-d963cb9d3ce2.jpg)

___
### Dashboard

Dashboard will have two functionalities:
1. Find Users to book an appointment with
    * The search bar will allow user to find a person to book an appointment. This find user feature will only show the users who are open to appointments.


2. View Own calendar
    * This will allow user to see their own appointments and schedules in the calendar.

![dashboardImage](https://user-images.githubusercontent.com/54300222/73910750-160edd80-48a8-11ea-9b6f-0f1d8e73321f.png)

___
### Booking Appointment

To book an appointment the user is required to fill out this form with basic information like: name, reason, time and date.

![formdata_view4](https://user-images.githubusercontent.com/21226482/73808400-6ea18600-4795-11ea-8eee-db171c3e3ffc.jpg)

___
### Appointment Confirmation

Once the user has booked their appointment, they are greeted with a success message. They can click the button below for an updated list of their appointments.

![ApptConfirm2](https://user-images.githubusercontent.com/21226482/73970937-a4ed1b80-48e3-11ea-8b4b-f9940d390a70.jpg)

___
### My Appointments

This page shows a list of the user's current appointments, along with the time, person, location, and reason for the meeting. This is shown in a tabular list format for a more brief overview.

![MyAppts3](https://user-images.githubusercontent.com/21226482/73970940-a74f7580-48e3-11ea-81c1-faf6563bf38b.jpg)

___
### Calendar View

Calendar view will show the coming months. Users can click on any month to learn more information.

![calendar_view5](https://user-images.githubusercontent.com/21226482/73783638-a7bc0500-4759-11ea-9b1e-955ca858597c.jpg)

___
### Monthly View with Appointments

An overview of the month with scheduled appointments and corresponding details for each day. If the user would like more information, they can click on any day's info note to see further detail.

![monthly_view6](https://user-images.githubusercontent.com/21226482/73783643-aab6f580-4759-11ea-812e-0a9ffe9f0ccd.jpg)

___
### Detailed Appointment View

This view appears after the user has clicked on a day's info note to see more information about the event(s) scheduled for that day.

![MoreDetail4](https://user-images.githubusercontent.com/21226482/73970945-a9b1cf80-48e3-11ea-8051-17e2b495e561.jpg)

___
### Logout confirmation

Successful logout message; for user confirmation and satisfaction.

![LogoutConfirm5](https://user-images.githubusercontent.com/21226482/73970949-ac142980-48e3-11ea-9f27-d6cb8ec5b9f7.jpg)

___
## Rabbit Holes

* User is outdated or an elderly user who does not have a Google account
* Distinguishing users (users who are making appointments vs. user who is accepting appointments)
* How to avoid overlapping appointment times?
* Should user accepting appointments be able to approve appointments before being added to calendar?
* How to reverse or undo an appointment after already being submitted?

___
## No Goes

* Normal users will not be able to accept or approve appointments
* Normal users will not cancel their appointments and/or edit them
* Elevated users (that are accepting appointments) will not be able to create an appointment
* No drag and drop feature for appointments on calendar
