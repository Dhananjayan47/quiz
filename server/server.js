const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const bodyParser=require('body-parser')
const Message=require('./modules/Message');

dotenv.config();

const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('mongodb connected'))
.catch(err=>console.error('mongodb not connect',err))

app.post('/submit',async (req,res)=>{
    try{
        const {name,message}=req.body;
        const newMessage= new Message({name,message});
        const saveMessage=await newMessage.save();

        res.status(200).json({success:true,save:saveMessage});
    }catch(error){ console.log('error saving message :',error);
        res.status(500).json({error:'server error'})
    }
});

app.listen(process.env.PORT,()=>console.log(`server run in ${process.env.PORT}`))