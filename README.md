# Exercise Tracker

## Description
The exercise tracker is a full-stack application deployed on heroku that allows a user to keep track of their daily workouts. They can add to a current workout to keep a running tally, or create a new workout. The dashboard will present you with your stats from the past seven days. 

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Testing](#testing)
  - [Contributions](#contributions)  
  - [Questions and Contact](#questions-and-contact)
  - [Credits](#credits)

## Installation
- To install this application, first clone to repo to your local device.
- Make sure to install node.
- Run ***npm init***
- Run ***npm install***
- Use mongoDB.
- Run ***node seeders/seed.js*** to seed the DB with pre-set data if desired.
- Run ***node server.js*** to start the server.

## Usage
This app is hosted with Heroku and linked to mongoDB-Atlas to store user data. If running on localhost, ensure that mongoDB is installed. 
You can click on add a new exercise, or you can continue a current workout and update the stats of that workout. The dhasboard link will take you to a stats page, where you can look at the total weight you have lifted or the total duration of your workouts for the past seven days. 

To stop at any point, type in ***ctrl c*** in the terminal and hit enter if using the browser.

Heroku App Link:
https://exercise-fun.herokuapp.com/?id=6105d3394ddacf0015c7fa96

## License
 ![badge](https://img.shields.io/badge/license-mit-blue?style=flat-square)<br>
  This application is licensed under the MIT license. Please click the link to read more about the license!<br>
  [License Information](https://choosealicense.com/licenses/mit/)

## Testing
Not available for this application.

## Contributions
:busts_in_silhouette:<br>
If you wish to contribute, please feel free to open an issue so we can discuss your ideas and develop a plan to move forward!
Pull requests will not be accepted without prior discussion, thank you. 

## Questions and Contact
  :grey_question::grey_question:<br>
  Please visit my GitHub profile <br>
  :octocat: https://github.com/aanolan51 <br><br>
  Feel free to drop me a line! <br> :fountain_pen: nolana464@gmail.com

## Credits
1. https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
2. https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
3. https://mongoosejs.com/docs/tutorials/findoneandupdate.html