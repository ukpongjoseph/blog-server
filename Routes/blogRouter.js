const router = require("express").Router()
const {createBlog, getBlogs, getSingleBlog, updateBlog, deleteBlog} = require("../Controllers/blog")
 
router.route('/').post(createBlog).get(getBlogs)
router.route('/:blogId').patch(updateBlog).get(getSingleBlog).delete(deleteBlog)


module.exports = router