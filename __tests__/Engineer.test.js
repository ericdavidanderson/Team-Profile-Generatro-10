
const Engineer = require("../lib/Engineer");
test("testing Engineer class construction", () => {
    // it("should add a github username to a constructor"
    const testValue = "testUser";
    const username = new Engineer("Eric", 1, "testing@test.net", testValue);
// const obj = new Engineer(github);

expect(username.github).toBe(testValue);
});


