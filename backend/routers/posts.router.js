const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts.controller')

router.get('/:id', postsController.getPostById)
router.get('/', postsController.getPosts)
router.post('/', postsController.createPost)
router.delete('/:id', postsController.deletePost)
router.patch('/:id/likes', postsController.updatePostLikes)

module.exports = router