const { getUserData } = require("../modules/getUserData");
const { getUserRepos } = require("../modules/getUserRepos");
const { getRepoCommits } = require("../modules/getRepoCommits");

// Get users details
exports.getUser = async (req, res) => {
  const username = req.params.username;
  // Use getUserData module to make the api request
  const userData = await getUserData(username);

  // Send result to user based on outcome from above function
  if (userData.status && userData.message) {
    const { status, message } = userData;
    res.status(status).json({
      status,
      message,
    });
  } else {
    res.status(201).json({
      userData,
    });
  }
};

// Get users repos
exports.getUserRepos = async (req, res) => {
  const username = req.params.username;
  // Use getUserRepos module to make the api request
  const userRepos = await getUserRepos(username);

  // Send result to user based on outcome from above function
  if (userRepos.status && userRepos.message) {
    const { status, message } = userRepos;
    res.status(status).json({
      status,
      message,
    });
  } else {
    res.status(201).json({
      userRepos,
    });
  }
};

// Get commit data from specific repo
exports.getRepoCommits = async (req, res) => {
  const username = req.params.username;
  const repoName = req.params.repo;
  // Use the getRepoCommits module to make the api request
  const repoCommits = await getRepoCommits(username, repoName);

  // Send result to user based on outcome from above function
  if (repoCommits.status && repoCommits.message) {
    const { status, message } = repoCommits;
    res.status(status).json({
      status,
      message,
    });
  } else {
    res.status(201).json({
      repoCommits,
    });
  }
};
