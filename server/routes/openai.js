import dotenv from "dotenv"
import express from "express"

dotenv.config()
const router = express.Router()

router.post("/text", async (req, res) => {
    try {
    } catch (error) {
        console.log("error", error)
        res.status(500).json({ error: error.message })
    }
})
