// Basic use.
{/* <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script> */}

const SC = require('soundcloud');

SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'https://example.com/callback'
});
