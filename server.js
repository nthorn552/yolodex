const express = require("express");
const path = require("path");
const app = express();

// serve our static stuff
app.use(express.static(path.join(__dirname, "dist")));

// send all requests to index.html so browserHistory in React Router works
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

var PORT = process.env.PORT || 8081;
app.listen(PORT, function() {
  console.log("Production Express server running at localhost:" + PORT);
});
