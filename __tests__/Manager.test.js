
const Manager = require("../lib/Manager");

test("testing ability to get role of manager", () => {
  const manager = new Manager("Juanita", 69, "Juanita69@gmail.com", "777");

  expect(manager.getRole()).toEqual("Manager");
});

