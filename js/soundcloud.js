// Basic use.
{/* <script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script> */}

const SC = require('soundcloud');

SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'https://example.com/callback'
});

// Recording
// The SDK uses getUserMedia, Web Workers and the Web Audio API to record from a user's computer, so make sure to check if the user's browser supports all of it (1, 2, 3) before you start recording. This example will record 5 seconds and play it back right away:
var recorder = new SC.Recorder();
recorder.start();

setTimeout(function(){
  recorder.stop();
  recorder.play();
}, 5000);
