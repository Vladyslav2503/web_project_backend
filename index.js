const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const CarModel = require('./models/Car')

const app = express()

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
    try {
       // await mongoose.connect('mongodb://127.0.0.1:27017/auth_roles')
       await mongoose.connect(`mongodb+srv://vlad88998:vlad88998@cluster1.whkatcr.mongodb.net/?retryWrites=true&w=majority`);

        app.get("/get", (req, res) => {
            CarModel.find()
            .then(result => res.json(result))
            .catch(err => res.json(err))
        })
  

        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()