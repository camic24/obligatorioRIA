//Install express server
const express = require('express');
const path = require('path');
app.use(express.static('build'));

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/obligatorioria'));

if (process.env.NODE_ENV) {
    //static folder add
  app.use(express.static('app/client/build'));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname , "app/client/build", "index.html"));
  });
  }

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);