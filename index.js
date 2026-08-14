const express = require('express');

const app = express();

const port = process.env.PORT || 8080;
app.use(express.static("frontend"));
const users=[{
    "id":1,
    "Name" : "John",
    "Gender": "Male",
    "Image": "https://randomuser.me/api/portraits/women/48.jpg"

},
{
    "id":2,
    "Name" : "Mattie Bell",
    "Gender": "female",
    "Image": "https://randomuser.me/api/portraits/women/64.jpg"

},
{
    "id":3,
    "Name" : "Valerio Middag",
    "Gender": "Male",
    "Image": "https://randomuser.me/api/portraits/men/41.jpg"

},
{
    "id":4,
    "Name" : "Becky Carlson",
    "Gender": "Female",
    "Image": "https://randomuser.me/api/portraits/women/85.jpg"

},
{
    "id":5,
    "Name" : "Theodore Green",
    "Gender": "Male",
    "Image": "https://randomuser.me/api/portraits/men/94.jpg"

},
]
app.get("/api/users",function(req,res){
    res.status(200).json(users);
})

app.listen(port, function () {
    console.log("my app is running at http://localhost:" + port);
});
