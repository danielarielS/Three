const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

const server = require("http").Server(app);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
server.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening on 8080.");
});
