const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require("request");


//start the server on port 8000
app.listen(8000, () => {
    console.log('Server started - Running on port 8000!');
});

const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost'], 
    credentials: true})); 

app.use(bodyParser.json())

//characters endpoint to make api call to https://us.battle.net with passed in search parameters
app.route('/api/characters').post((req, res) => {
    //set variables from request obj
    let characterName = req.body.characterName;
    let realmName = req.body.realmName;

    var newAccessToken = getAccessToken().then(success => {
        let accessToken = success.access_token;
        makeAPICall(accessToken, characterName, realmName).then(success => {
            res.send(success); 
          }, error => {
            res.status(500).send(error); 
          });
      }, error => {
        res.status(500).send(error); 
      });


    
});


/**
 * makeAPICall sends a request url with the character and realm names using the accessToken for access
 * @param accessToken - a generated token
 * @param characterName - the character name from user input
 * @param realmName - the ralm name from user input
 * 
 * @returns a promise which will be the result from the request
 */
makeAPICall = function(accessToken, characterName, realmName){
    return new Promise((resolve, reject) => {
        request.get("https://us.api.blizzard.com/wow/character/"+realmName+"/"+characterName+"?fields=stats%2C%20items&locale=en_US&access_token="+accessToken, (error, response, body) => {
            if(error) {
                reject(error);
            }
            resolve(JSON.parse(body)); 
        });
    });
}


/**
 * getAccessToken sends a request url using the clientId and secret to get access to an access token
 * 
 * @returns a promise which will be the result from the request
 */
getAccessToken = function() {
    //variables to generate a token
    const clientId = "420ff5fb06f24d36bb8f41d6332c2351";
    const clientSecret = "8BTYcpJROH4Zof9taAnDHpgLfuH6nAOA";
    const getNewTokenUrl = 'https://us.battle.net/oauth/token?grant_type=client_credentials&client_id='+clientId+'&client_secret='+clientSecret;
    return new Promise((resolve, reject) => {
        request.get(getNewTokenUrl, (error, response, body) => {
            if(error) {
                reject(error);
            }
            resolve(JSON.parse(body)); 
        });
    });

}