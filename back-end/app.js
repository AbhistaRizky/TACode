require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/utils")

const app = express();
app.use(express.json());
app.use(cors("*"));


app.get("/feedback", async (req, res) => {
    //TODO : Get All Feedback
    const rows = await db.query(
        `SELECT * FROM feedbacks`
    );
    const feedbacks = db.emptyOrRows(rows);


    return res.status(200).json({
        feedbacks,
        message: "success get feedback"
    })

})

app.post("/feedback", async (req, res) => {
    //TODO : Create a Feedback


    if (!req.body.content) {
        return res.status(400).json({
            message: "Content should be filled"
        })
    }


    if (!req.body.name) {
        return res.status(400).json({
            message: "Name should be filled"
        })
    }

    if (!req.body.rating) {
        return res.status(400).json({
            message: "Rating should be filled"
        })
    }

    const { content, name, rating } = req.body;
    const feedback = await db.query(
        `INSERT INTO feedbacks (name, content, rating) VALUES ('${name}', '${content}', ${rating})`
    );

    return res.status(201).json({
        feedback,
        message: "success create feedback"
    })

})





module.exports = app.listen(process.env.PORT, () => {
    console.log("Server running at PORT " + process.env.PORT)
})