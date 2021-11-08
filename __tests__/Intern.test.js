//test for intern role
const Intern = require("../lib/Intern");

test("testing ability to get role of intern", () => {
  const intern = new Intern("Ming", 420, "ming@gmail.com", "UCLA");

  expect(intern.getRole()).toEqual("Intern");
});
