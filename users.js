const uuid = require('uuid')
var users = []; 


const homePage = (req, res) => {
    res.send('Homepage Already')
    console.log('seen at homepage')
}

const createUser = (req, res) => {
    const user = req.body; 
    console.log(user)
    const userId = uuidv4() 
    const userWith = { ... user, id: uuid.v4()}; 
    users.push(userWith)
    res.send('user with the name ', user.firstName, 'added to the database')
}


const getUser = (req, res) => {
    res.send(users)
    console.log(users)
}


const deleteUser = (req, res) => {
    const {  id } = res.params; 
    users = users.filter((user) => user.id != id); 
    res.send(`User With The ${id} is deleted from the Database`); 
}


const updateUser = (req, res) => {
    const { id } = req.params; 
    const { firstName, lastName, age } = req.body 
    const updateUserId = users.find((user) => user.id == id) 
    
    if(firstName) user.firstName = firstName; 
    if(lastName) user.lastName = lastName; 
    if(age) user.age = age

    res.send(`User with the id updated ${id}`)
}

const getId = (req, res) => {
    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser)
}


module.exports = {
    createUser,
    getUser, 
    deleteUser, 
    updateUser, 
    getId, 
    homePage
}