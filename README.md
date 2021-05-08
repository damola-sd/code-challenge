# CP+R Code Challenge

The following is a short and simple code challenge showing a small cross-section of code you would find on the backend side of our production environement.

### Installation

You should be familiar with the basic installation process but the short version is `npm install` and then `npm run server` to run begin.

### Instructions 

Please fork this repository and create a new branch. Open a PR  and send a link to whichever developer sent you this challenge.

- If you are not familiar with Heart Rate Zone training, please read [this](https://www.polar.com/blog/running-heart-rate-zones-basics/) to familiarize yourself. We are not working with any complicated calculations, but a general understanding will be beneficial. 

This simple application has two endpoints:

1.)  GET `/api/zones` that will return a JSON object with details regarding the Heart Rate Zones

2.) POST `/api/current_zone` - takes `current_hr` and `resting_hr` in the body, which must be numbers, and returns the Heart Rate Zone applicable. 

Your job is to fix a problem and implement two features:

- Firstly, the code looks and feels quite solid. However, it doesn't seem to be accepting input data. Please ensure data can be sent to the POST endpoint.
- Once we are receiving user input,  the endpoint will return a string containing the relevant information. The zone, however, is not being calculated yet. Please complete the function in `./helpers/calculateZone.js` to return the correct zone.
- Excellent. Next is fairly open ended - we would like you to implement some simple testing to the application. It is up to you as to how much or little you implement. More is not necessarily better. If this was a feature you were implementing in the real world, you would need to balance time spent developing vs coverage. You may use any library or libraries you see fit. 

We estimate that 2 hours should be adequate but please feel free to take less or more time as you feel necessary. 