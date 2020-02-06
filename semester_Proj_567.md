# *Group Name*: Final Project Pitch

## Summary

Create an appointment-scheduling calendar system with Google integration for personal, commercial, and/or government applications.

## Problem

People nowadays integrate a lot of technology into organizing their daily lives. These include note reminders, electronic planner apps, virtual calendars and much more. Although these technologies come in handy they still require a fair amount of manual work. There are many businesses that deal with clients who set up appointments daily, using some sort of scheduling system. What if users could schedule those appointments faster — without the need to manually input those appointments on the other end. The problem here is that there should be faster way to have those scheduled appointments on a user's calendar — without the need to do a lot of typing.

## Appetite

The appetite for this project should only be a six-week cycle focusing primarily on the core functionality of sending data from a form to the user's calendar. After the six-week cycle, the time will be used for testing as well as site design.

## Solution

A solution for this project is to create an appointment scheduling type of web system that allows the users to fill out a form and book an appointment with the another user and vice versa. Essentially, users would use their Google account (or other account, after sign-up) to fill out a form which then would submit to the calendar of the person they want to make an appointment with. With this solution, clients will be able to set up their own appointments with anyone that uses this web system without the other end having to document those appointments manually.

Ideally the Google API would be used to allow users to authenticate their own Google accounts and post data under their alias. There would also be a Google Calendar API which will help to retrive data from a user's calendar to provide available times for appointments and allow users to book an appointment.
___
### Login

Login screen will allow user to login either with the google account or with the simple signIn form which requires username and password of the user.

![login_view1](https://user-images.githubusercontent.com/21226482/73808395-677a7800-4795-11ea-813d-e8717856cef7.jpg)

___
### Sign-up

Sign-up form will allow user to create an account manually with an valid email id, username, password and other user infromation.

![signup_view2](https://user-images.githubusercontent.com/21226482/73808399-6c3f2c00-4795-11ea-889e-1f7a91bbd95b.jpg)

___
### Dashboard

Dashboar will have two functionalities
1. Find Users to book an appointment with
    * The search bar will allow user to find a person to book an appointment. This find user feature will only show the users who are open to appointments.
2. View Own calendar
    * This will allow user to see it's own appointments and schedules in the calendar.

![loggedin_view3](https://user-images.githubusercontent.com/21226482/73783616-9ffc6080-4759-11ea-8313-eb05cca6072b.jpg)

___
### Booking Appointment

To book an appointment user is required to fill out the form with basic information like Name, Reason, time and date.

![formdata_view4](https://user-images.githubusercontent.com/21226482/73808400-6ea18600-4795-11ea-8eee-db171c3e3ffc.jpg)

___
### Calendar View

Calendar view will show the coming months. Users can click on any month to get detailed view.

![calendar_view5](https://user-images.githubusercontent.com/21226482/73783638-a7bc0500-4759-11ea-9b1e-955ca858597c.jpg)

___
### Monthly View with Appointments

![monthly_view6](https://user-images.githubusercontent.com/21226482/73783643-aab6f580-4759-11ea-812e-0a9ffe9f0ccd.jpg)

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
