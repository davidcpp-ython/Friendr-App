const userModel = require('../data/user.model')

const usersService = {
    getUserById: async (userId) => {
        const response = await userModel.findOne({ id: userId }, {});
        return response
    },
    getUserByUsername: async (username) => {
        const response = await userModel.findOne({ username: username }, { firstName: 1, lastName: 1});
        return response
    },
    createUser: (userObj) => {
        console.log("Reached user services");
        console.log(userObj);
        const userToBeCreated = new userModel(userObj)
        userToBeCreated
            .save()
            .then(() => console.log("User created!"))
    },
    deleteUser: async (userId) => {
        console.log("Reached DELETE user services")
        const response = await userModel.deleteOne({ id: userId })
        return response
    }
}

module.exports = usersService;