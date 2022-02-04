const Intern = require('../lib/Intern');

test("Gets school info thru getSchool", () => {
    const testValue = "SMU"
    const emp = new Intern("sam", 1, "email@email.com", testValue)

    expect(emp.school).toBe(testValue);
});

test("getRole() looking to return intern", () => {
    const testValue = "Intern";
    const emp = new Intern("sam", 1, "email@email.com", "SMU");

    expect(emp.getRole()).toBe(testValue);
});

test("looking to get school thru getSchool", () => {
    const testValue = "SMU"
    const emp = new Intern("sam", 1, "email@email.com", testValue)

    expect(emp.getSchool()).toBe(testValue)
});