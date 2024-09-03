const bookRouters = require("./routers/book")
const studentRouters = require("./routers/student")
const rentalRouters = require("./routers/rental")

const express = require("express")
const app = express()

const port = 4000

app.use(express.json())

app.use("/book", bookRouters)
app.use("/student", studentRouters)
app.use("/rental", rentalRouters)

app.listen(port, () => {
    console.log("Server is running..");
})