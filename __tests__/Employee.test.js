const expectExport = require("expect");
const Employee = require("../lib/Employee");
describe("testing employee class construction", () => {
  it("should add a name to constructor", () => {
    var name = "Dan";

    const obj = new Employee(name);

    expect(obj.name).toEqual(name);
  });
});
