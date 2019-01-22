
## Ping Pong score display ##

This is a set of pages to show the scores from the World Championships at Alexandra Palace, January 2017

- I started with flex layouts in html, groups and draw.html
- Now have moved into a react project, see below.
- inspiration from [LTA Match centre](http://matchcentre.lta.org.uk/championships/draw.html)
- there is a retina image file version

### next ###
- change PP prefixes
- add doubles taken?
- web page to score, just points, result

### = dev start =

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Added the Firebase connections in index.js

Decided to host on Firebase hosting for simplicity.
Used 'npm install -g firebase-tools'.
then 'firebase login'
Then 'firebase init' which looks for a 'public' directory, change this in the .json to 'build'.

Use 'npm run build' to package to build directory.
Use 'firebase login' then 'firebase deploy' to send to web site.
Example online [https://pingpong-32ba1.firebaseapp.com/](https://pingpong-32ba1.firebaseapp.com/)


Updated 2018
maybe
- npm install -g firebase-tools
- firebase login (i.ht)
- firebase init  (??)

pull the project
- npm install
- npm run build
- firebase deploy

- change database reference in index.js 
- change database reference in .firebaserc
- change references in PPTable, PPDraw

Update 2019 similar to above
- consolidated scores per year
- didn't do firebase init
- added query-string to pick up a year=2017 parameter
 - npm install -g pushstate-server
 - pushstate-server build
 - start http://localhost:9000

