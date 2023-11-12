const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://kenechukwudennis:CTIH35SBSDCoKatS@cluster0.dygxsjx.mongodb.net/my-database?retryWrites=true&w=majority";


async function connect() {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to mongoDB")

        }  catch(error){
            console.error(error);
        }
    }

    connect();

    const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

const user = new User({
    username: 'jack',
    password: '12345'
});

user.save( /*(error) => */
   /* if(error) throw error;*/
    console.log('New user has been saved to the database successfully')
);



app.get('/', (req, res) => {
    res.send('Welcome To My Game App!');
  });

  app.post('/', (req,res) => {
    const {username, password} = req.body;
    const user = new User({
        username,
        password
    });
    user.save(/*(error)=> {
        if (error) {
            res.status(500).send(error);
        }  else {*/
        res.send('User saved to the database'));
    });
    


app.listen(3000, () => {
    console.log('Server started on port 3000');
  });