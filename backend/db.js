/* todo {
    title: String,
    description: String,
    complete: boolean
}
*/
require('dotenv').config();
const mongoose = require('mongoose')
const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

// Call the connection function
dbconnect();

// mongoose.connect(process.env.DB_URL,{
//     useNewUrlParser: true,
//       useUnifiedTopology: true,
// }).then(()=>{console.log('connect')}).catch((e)=>{console.log(e)});
const TodoSchema = mongoose.Schema({
    title:String,
    description:String, 
    complete:Boolean,     
});


const todo = mongoose.model('todo1', TodoSchema)
module.exports ={
    todo
}