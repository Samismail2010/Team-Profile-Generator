const Engineer = require('../lib/Engineer');

test("Looking to set Github account thru a constructer", () => {
    const testValue = "githubusername";
    const emp = new Engineer ("sam", 1, "email@email.com", testValue);

    expect(emp.github).toBe(testValue);
});

test("getRole() looking to return enigneer", () => {
 const testValue = "Engineer";
 const emp = new Engineer ("sam", 1, "email@email.com", "githubusername");

 expect(emp.getRole()).toBe(testValue);
});

test("Pull gethub username by using getGithub()", () => {
    const testValue = "githubusername"
    const emp = new Engineer ("sam", 1, "email@email.com", testValue);

    expect(emp.getGithub()).toBe(testValue);
});

