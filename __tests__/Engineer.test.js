
const Engineer = require("../lib/Engineer");
test("testing Engineer class construction", () => {
    // it("should add a github username to a constructor"
    const testValue = "testUser"; {
        const username = new Engineer("Eric", 1, "github.com/ericdavidanderson/, testValue);
        const obj = new Engineer(github);

        expect(username.gethub).toBe(testValue);
    });
});
    
