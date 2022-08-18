const express=require("express")
const app=express()
app.use(express.json())


const middleware=(req,res,next)=>{
    const {ID,Name,Rating,Description,Genre,Cast}=req.body
   if(ID===undefined || Name===undefined ||Rating===undefined ||
     Description===undefined || Genre===undefined || Cast===undefined)
   {
    res.status(400).send("all fields are required")
   }
   else if(typeof(ID)!="number"|| typeof(Name)!="string" ||typeof(Rating)!="number" ||
   typeof(Description)!="string" || typeof(Genre)!="string" || typeof(Cast)!="object")
  {
   res.status(400).send("please check input types")
  }
  else{
    next()
  }
    
}


app.use(middleware)

app.post("/",(req,res)=>{
    res.send("data in")
})

app.listen(3000,()=>{
    console.log("server started")
})