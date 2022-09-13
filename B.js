var google = require('googleapis');

var key = require('key.json');//set path to JSON file with your API secret (see Google docs about authentification)
var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/cloud-platform'],
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  var cred = jwtClient.credentials;
  console.log('use authentification: '+cred.token_type+' '+cred.access_token);
});
