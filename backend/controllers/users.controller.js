const usersService = require("../services/users.service");

const usersController = {
    getUser: async (req, res) => {
        console.log("GET Users controller");
        const username = req.params.username;
        console.log(username);
        const userObj = await usersService.getUserByUsername(username);
        if (!userObj) {
            res.status(404).send("Username not found!");
            return;
        }
        res.status(200).send(userObj);
        //usersService.createUser(userObj);
    },
    createUser: async (req, res) => {
        console.log('POST Users controller');
        const userToBeCreated = req.body;
        console.log(userToBeCreated);

        if (!userToBeCreated ||
            JSON.stringify(userToBeCreated) === "{}" ||
            !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.username
        ) {
            res.status(400).send("Invalid user object!");
            return;
        }

        usersService.createUser(userToBeCreated);
        res.status(201).send("User created successfully!");
    },
    deleteUser: async (req, res) => {
        console.log("DELETE Users controller")
        const userId = req.params.id
        await usersService.deleteUser(userId)
        res.status(200).send(`Deleted user with id equal to ${userId}!`)
    }
}

module.exports = usersController;