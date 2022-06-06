//Install express server
const express = require('express');
const path = require('path');
app.use(express.static('build'));

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/obligatorioria'));

app.get('*', function (req, res) {
    res.sendFile('index.html');
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);