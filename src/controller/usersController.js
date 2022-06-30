const Users = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = passwordWithHash;
    const user = new Users(req.body);
    user.save(function (err){
        if (err) {
            res.status(500).send({message: err.message});
        };
        res.status(201).send(user);
    }); 
};

const getAll = (req, res) => {

    Users.find(function (err, users){
        if (err) {
            res.status(500).json({ message: error.message });
        };
        res.status(200).send(users);
    });
};

const deleteById = async (req, res) => {
    try {const {id} = req.params;
    await Users.findByIdAndDelete(id);
    const message = `User with ID ${id} was successfully deleted`;
    res.status(200).json({message});
    }catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
    };
};

const login = (req, res) => {
    Users.findOne({ email: req.body.email}, function (error, user) {
    if (error) {
        return res.status(500).send({ message: 'Header not found'});
        };
    if (!user){
        return res.status(404).send(`There is no user registered with this email: ${email}`);
    };
    const validPassword = bcrypt.WithpareSync (req.body.password, user.password);
    if (!validPassword){
        return res.status(403).send('Incorrect password. Try again later.');
    };
    const token = jwt.sign({email: req.body.email}, SECRET);
    return res.status(200).send(token);
    });
};

module.exports ={
create,
getAll,
deleteById,
login
}
