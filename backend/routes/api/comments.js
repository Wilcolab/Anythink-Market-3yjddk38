/**
 * Express router for comment operations
 * @type {Router}
 */

/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Database query error
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:CommentId
 * @param {string} req.params.CommentId - The ID of the comment to delete
 * @returns {Promise<void>} 200 status code on successful deletion
 * @throws {Error} Database deletion error
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//"//Hey GitHub Copilot, can you help me with this code? I want to create a route that allows users to post comments on a blog post. The comment should include the user's name, the comment text, and the ID of the blog post it belongs to. Can you write the code for this route?"

router.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

//add another endpoint for deleting a comment by its ID
router.delete("/:CommentId", async (req, res, next) => {
    try {
        await Comment.findByIdAndRemove(req.params.CommentId);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});