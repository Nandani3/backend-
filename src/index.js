import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
















/*
(async() => {
    try {
        await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}')
        application.on("error" , (error) => {
            console.log("Error in DB connection", error)
            process.exit(1)

        })
        application.listen(process.env.PORT),() => {
            console.log('server is started at port $(process.env.PORT)')
        }

    }
    catch (error){
        console.log("Error in DB coonection", error)
    }
})
    */