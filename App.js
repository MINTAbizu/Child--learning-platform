const  express =require('express');
// const path = require('path');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentroute=require("./route/Student.route")


require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
//route
app.use(studentroute)


// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
mongoose.connect(process.env.MONGOOSE_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
}
);