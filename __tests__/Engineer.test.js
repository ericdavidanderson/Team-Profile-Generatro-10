//remember to import employee

const Engineer = require("../lib/Engineer");
test("testing ability to add github user ID to Engineer class", () => {
    // it("should add a github username to a constructor"
    const testValue = "testUser";
    const username = new Engineer("Eric", 1, "testing@test.net", testValue);
// const obj = new Engineer(github);

expect(username.github).toBe(testValue);
});


