const express = require("express");

const app = express();

const PORT = 3289;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/*", (req, res) => {
    // res.send("Hello from the server!!")
    res.render("index", {
        name: "Umang Kumar Sisodia",
        subjects: ["react.js", "express.js", "node.js"]
    });
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})