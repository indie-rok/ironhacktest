const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("config");

const usersRoute = require("./routes/user.route");
const moviesRoute = require("./routes/movies.route");

const app = express();

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

//connect to mongodb

mongoose
  .connect(
    "mongodb+srv://indie-rok:Cheers2u@ironhack-test-rqer6.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(express.json());

app.use("/api", usersRoute);
app.use("/api", moviesRoute);

// All remaining requests return the React app, so it can handle routing.
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});

app.listen(PORT, function() {
  console.error(
    `Node ${
      isDev ? "dev server" : "cluster worker " + process.pid
    }: listening on port ${PORT}`
  );
});
