const express = require('express');

const router = express.Router();

//Routing 
router.get('/', (req, res) => {
    res.setHeader('myName', 'Kirtee Patil')
    return res.json(user);
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const commanUser = user.find((commanUser) => commanUser.id === id);

    return res.json(commanUser);
})


router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);


    return res.status(201).json({ status: 'Pending' })
})


module.exports = router;