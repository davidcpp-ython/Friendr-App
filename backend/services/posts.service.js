const postModel = require('../data/post.model')
const { v4: uuidv4 } = require('uuid')


const postsService = {
    getPostById: async (postId) => {
        const response = await postModel.findOne({ id: postId }, {})
        return response
    },
    removePostLikes: async (postId, username) => {
        await postModel.updateOne({ id: postId }, { $pull: { likes: username } })
    },
    addPostLikes: async (postId, username) => {
        await postModel.updateOne({ id: postId }, { $push: { likes: username } })
    },
    createPost: (postObj) => {
        console.log("Reached POST post services")
        console.log(postObj)
        postObj.date = new Date().toISOString();
        postObj.id = uuidv4();
        const postToBeCreated = new postModel(postObj)
        postToBeCreated
            .save()
            .then(() => console.log("Post created!"))
    },
    getPosts: async () => {
        const response = await postModel.find()
        return response
    },
    deletePost: async (postId) => {
        console.log("Reached DELETE post services")
        const response = await postModel.deleteOne({ id: postId })
        return response
    }
}

module.exports = postsService