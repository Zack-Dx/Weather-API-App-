const express = require("express");
const app = express();
const port = process.env.PORT || 4002; //For hosting purpose.
const path = require ("path")
const templates = path.join (__dirname, "./templates/views")
const partial = path.join (__dirname ,"./templates/partials")
const hbs = require ("hbs")

//To set view engine
app.set ('view engine', 'hbs')
app.set ("views", templates)

//Public Static Path
const publicpath= path.join(__dirname , "../public")

//To tell express about your path is changed to templates:
app.use(express.static(publicpath))

//To register partials
hbs.registerPartials(partial)


//Routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
