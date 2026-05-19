// const { render } = require("ejs");
const express=require("express");
const app=express();
const path=require("path");
var methodOverride=require("method-override");
// const { title } = require("process");
const port = process.env.PORT || 8080;

app.use(methodOverride("_method"));
app.set("view engine","ejs");//to set the view engine as ejs
app.set("views",path.join(__dirname,"views"))//to set the absolute path 
app.use(express.static("public"));//to serving the static files
// app.set("public",path.join(__dirname,"public"));
app.use(express.urlencoded({extended:true}));//to get the post request's data

const{v4:uuidv4}=require("uuid");
let expenses=[
    {
      id:uuidv4(),
      title:"Pizza",
      amount:'450',
      category:"Food",
      date:"2026-05-15"
   },
   {
      id:uuidv4(),
      title:"Bus Ticket",
      amount:'80',
      category:"Travel",
      date:"2026-05-14"
   },
   {
      id:uuidv4(),
      title:"Movie",
      amount:'300',
      category:"Entertainment",
      date:"2026-05-12"
   },
   {
      id:uuidv4(),
      title:"Medicine",
      amount:'300',
      category:"health",
      date:"2026-05-12"
   }
];


app.get("/",(req,res)=>{
   res.redirect("/expenses");
});

app.get("/expenses",(req,res)=>{
   res.render("index",{expenses});
});

app.get("/expenses/new",(req,res)=>{
   res.render("new_expense");
});

app.post("/expenses",(req,res)=>{
   let {title,amount,category,date}=req.body;
   let new_expense={id:uuidv4(),title,amount,category,date};
   expenses.push(new_expense);
   res.redirect("/expenses");
});

app.get("/expenses/:id",(req,res)=>{
   
   let {id}=req.params;
   let expense=expenses.find((e)=>e.id === id);
   res.render("expense",{expense});
});

app.delete("/expenses/:id",(req,res)=>{
   // res.send("working");
   let {id}=req.params;
   expenses=expenses.filter((e)=>e.id !== id);
   res.redirect("/expenses");
});

app.get("/expenses/:id/edit",(req,res)=>{
   let {id}=req.params;
   let expense=expenses.find((e)=>e.id === id);
   res.render("update",{expense});
});

app.patch("/expenses/:id",(req,res)=>{
   let {id}=req.params;
   let expense=expenses.find((e)=>e.id === id);
   let {title,amount,category,date}=req.body;
   expense.title=title;
   expense.amount=amount;
   expense.category=category;
   expense.date=date;
   res.redirect("/expenses");
   
});

app.listen(port,()=>{
   console.log(`listening to ${port}`);
})