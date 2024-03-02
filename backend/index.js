var express = require('express');
const app = express();
const { createTodo } = require('./types');  
const { updateTodo } = require('./types');
const { todo } = require('./db');
const port = 3000;
const cors = require('cors');
app.use(express.json());
//access all port 
app.use(cors())

//only access from http://localhost:5173

// app.use(cors({
//     origin:'http://localhost:5173'
// }));


//create
app.post('/create',async (req,res)=>{
const createpayload =  req.body
const parsepayload = createTodo.safeParse(createpayload);
if(!parsepayload.success)
{
    res.status(400).json({
      msg :'Invalid JSON'
    })
    return ;
} 
await todo.create({
    title:createpayload.title,
    description:createpayload.description
}) 
res.json({
    msg : 'todo created successfully '
})
})
//read
app.get('/read',async (req,res)=>{
   const data = await todo.find({})
   res.json({
    todo:data
   })
})
//update
app.put('/update',async (req,res)=>{
    const updatepayload =  req.body
    const parsepayload = updateTodo.safeParse(updatepayload);
    if(!parsepayload.success)
    {
        res.status(400).json({
            error:parsepayload.error
        })
        return ;
    }

    await todo.updateOne({
        _id:req.body.id
    },{
        complete:true
    })
    res.json({
        msg : 'todo updated successfully '
    })
})
//delete
app.delete('/delete',async (req,res)=>{
    const deletepayload =  req.body
    const parsepayload = updateTodo.safeParse(deletepayload);
    if(!parsepayload.success)
    {
        res.status(400).json({
            error:parsepayload.error
        })
        return ;
    }
    await todo.deleteOne({
        _id:deletepayload.id
    })
    res.json({
        msg : 'todo deleted successfully '
    })
})

app.listen(port,()=>{
    console.log('Server is running on port '+port);
})