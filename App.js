console.log('Hi');
const PORT = 4000;
const express = require('express');
const http = require('http');
const app = express();
app.use(express.json())
let data=[]
app.get('/hello',(req,res)=>{
    res.status(200).json(data)
})
app.post('/hello',(req,res)=>{
     const a=req.body.name
    const b=req.body.rollno
  //console.log(req.body);
  //const jsondata =[{name:"rajat",rollno:21,},{},{}];
  //res.status(200).json(req.body);
  const noname=a==""&& b!=""
  const noroll=a!=""&&b==""
  const allfilled=a!=""&&b!=""
  const notfilled=a==""&&b==""

  if(noname){
      res.status(400).send("enter name")
  }
  if(noroll){
      res.status(400).send("enter roll")
  }

  if (allfilled){
      res.status(200).send("Successfull")
      data.push(req.body)
      console.log(req.body
        )
  }
  if(notfilled){
      res.status(400).send("unsuccessful")
  }
}) 
 app.listen(PORT,()=>{
     console.log('Hii i"m listening on'+ PORT)
})
// http.createServer((req,res)=>{
//     res.write('HI');
//     res.end()
// }).listen(PORT)