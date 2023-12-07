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
        await mongoose.connect('mongodb+srv://vlad88998:vlad88998@cluster1.whkatcr.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
        // await mongoose.connect('mongodb://127.0.0.1:27017/auth_roles')

        app.get("/get", (req, res) => {
            CarModel.find()
                .then(result => res.json(result))
                .catch(err => res.json(err))
        })

        // Маршрут для отримання інформації про автомобіль за id
        app.get('/api/cars/:id', async (req, res) => {
            try {
                const carId = req.params.id

                // Знайдіть автомобіль за id в базі даних
                const car = await CarModel.findById(carId);

                if (!car) {
                    return res.status(404).json({ message: 'Автомобіль не знайдено' });
                }

                res.json(car);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Помилка сервера' });
            }
        });

    } catch (e) {
        console.log(e)
    }
}

start()