const expectExport = require("expect");
const Engineer = require("../lib/Engineer");
describe("testing Engineer class construction", () => {
    it("should add a github username to a constructor", () => {
        var username = "github.com/ericdavidanderson/";
        const obj = new Engineer(github);

        expect(obj.github).toEqual(username);
    });
});
    
