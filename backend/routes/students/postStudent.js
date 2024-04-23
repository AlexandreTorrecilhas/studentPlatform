const express = require('express');
const router = express();
router.use(express.json())
const db = require('../../database/connection');
const Student = require('../../models/students');

router.post('/createUser', async (req, res) => {
    const {email, user_password} = req.body;

    console.log(`***${typeof user_password}***`);

    try {

        if(typeof email === 'undefined'){
            res.status(400).json({message: "Por favor, informe o email do usuário"});
        }
        else if(typeof user_password === 'undefined' || user_password.length < 5){
            res.status(400).json({message: "Por favor, informe a senha do usuário"});
        }

        const newUser = await Student.create({email,user_password});
        
        res.status(200).json({message: "Usuário cadastrado"});
    } catch (error) {

        res.status(500).json({error: "Infelizmente não conseguimos cadastrar o novo usuários, por favor entre em contato com o suporte"});
    }

})

module.exports = router;