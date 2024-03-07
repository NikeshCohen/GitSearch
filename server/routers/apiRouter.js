const express = require("express");
const apiController = require("../controllers/apiController");

// Create a new router instance
const router = express.Router();

// Route for getting user repositories by username
router.route("/user/repos/:username").get(apiController.getUserRepos);

// Route for getting commits of a specific repository by username and repo name
router.route("/:username/:repo/commits").get(apiController.getRepoCommits);

// Route for getting user data by username
router.route("/user/:username").get(apiController.getUser);

module.exports = router;
