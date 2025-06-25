const Blog = require("../Models/blog")

// a. create a blog
const createBlog = async(req, res) => {
    // res.send("created")
    console.log(req.user)
    const {userId, name} = req.user
    req.body.createdby = userId
    try {
        const blog = await Blog.create(req.body)
        res.status(201).json({success: true, blog})
    } catch (error) {
        res.json({error})
    }
}
// b. get all blogs
const getBlogs = async(req, res) => {
    // res.send("get all blogs")
    const {userId} = req.user
    try {
        const blogs = await Blog.find({createdby: userId})
        res.status(200).json({success: true, blogs})
    } catch (error) {
        res.json({error})
    }
}
// c. get a single blog
const getSingleBlog = async(req, res) => {
    // res.send("single blog")
    const {blogId} = req.params
    const {userId} = req.user
    try {
        const blog = await Blog.findOne({createdby: userId, _id: blogId})
        res.status(200).json({success: true, blog})
    } catch (error) {
        res.json({error})
    }
}
// d. update a blog
const updateBlog = async(req, res) => {
    // res.send("updated")
    const {userId} = req.user
    const {blogId} = req.params
    try {
        const blog = await Blog.findOneAndUpdate({createdby: userId, _id: blogId}, req.body, {new: true}, {runValidators: true})
        res.status(200).json({success: true, blog})
    } catch (error) {
        res.json({error})
    }
}
// e. delete a blog
const deleteBlog = async(req, res) => {
    // res.send("deleted")
    const {userId} = req.user
    const {blogId} = req.params
    try {
        const blog = await Blog.findOneAndDelete({createdby: userId, _id: blogId})
        res.status(200).json({success: true, msg: `blog with title '${blog.title}' is deleted`})
    } catch (error) {
        res.json({error})
    }
}

module.exports = {createBlog, getBlogs, getSingleBlog, updateBlog, deleteBlog}