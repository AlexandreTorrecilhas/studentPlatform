const express = require('express')
const router = express()
router.use(express.json())
const db = require('../../database/connection')
const Student = require('../../models/students')

router.get('/getAllStudents', async (req, res) => {
    try {
        const result = await Student.findAll();

        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({error: "Não conseguimos encontrar os alunos"})
        throw error 
    }
})

module.exports = router;