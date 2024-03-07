const request = require("supertest");
const app = require("../app");

// Test suite for GET /user/:username endpoint
describe("GET /user/:username", () => {
  // Test case: Should return a userData data object from github API
  test("Should return a userData data object from github API", async () => {
    const response = await request(app).get("/api/user/nikeshcohen");
    expect(response.status).toBe(201);
    expect(response.body.userData).toBeDefined();
  });

  // Test case: Should return a 404 status and error message if the user is not found
  test("Should return a 404 status and error message if the user is not found", async () => {
    const response = await request(app).get("/api/user/as4OtKjHpJLC05jNom");
    expect(response.status).toBe(404);
    expect(response.body.userData).toBeUndefined();
    expect(response.body.message).toBe("Not Found");
  });
});

// Test suite for GET /:username/:repo/commits endpoint
describe("GET /:username/:repo/commits", () => {
  // Test case: Should return a userData data object from github API with all the commits from a specific repo
  test("Should return a userData data object from github API with all the commits from a specific repo", async () => {
    const response = await request(app).get(
      "/api/nikeshcohen/snake-game/commits"
    );
    expect(response.status).toBe(201);
    expect(response.body.repoCommits).toBeDefined();
  });

  // Test case: Should return a 404 status and error message if the repo is not found
  test("Should return a 404 status and error message if the repo is not found", async () => {
    const response = await request(app).get(
      "/api/as4OtKjHpJLC05jNom/as4OtKjHpJLC05jNom/commits"
    );
    expect(response.status).toBe(404);
    expect(response.body.repoCommits).toBeUndefined();
    expect(response.body.message).toBe("Not Found");
  });
});

// Test suite for GET /user/repos/:username endpoint
describe("GET /user/repos/:username", () => {
  // Test case: Should return a userData data object from github API with all the repos of a specific user
  test("Should return a userData data object from github API with all the repos of a specific user", async () => {
    const response = await request(app).get("/api/user/repos/nikeshcohen");
    expect(response.status).toBe(201);
    expect(response.body.userRepos).toBeDefined();
  });

  // Test case: Should return a 404 status and error message if the user does not exist are not found
  test("Should return a 404 status and error message if the user does not exist are not found", async () => {
    const response = await request(app).get("/api/user/as4OtKjHpJLC05jNom");
    expect(response.status).toBe(404);
    expect(response.body.repoData).toBeUndefined();
    expect(response.body.message).toBe("Not Found");
  });
});
