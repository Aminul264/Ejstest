const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/about',(req,res)=>{
 res.render('pages/about')
})
app.get('/help',(req,res)=>{
    res.render('pages/help')
})
app.get("/", (req, res) => {
  let post = {
    title: "posts tile ",
    body: "post body ",
    published: true,
  };
  let posts = [
    { title: "title1", author: "Aminul Islam"},
    { title: "title2", author: "Nasim "},
    { title: "title3", author: "Amin"}
    ];

  res.render("pages/index", {
    title: " Wow! ejs is an awesome template engine",
    post,posts
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
