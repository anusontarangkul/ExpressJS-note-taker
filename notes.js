const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./public/assets/js/index")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
