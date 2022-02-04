const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee')

test("Looking to set office number thru a constructor", () => {
    const testValue = 12345
    const emp = new Manager("sam", 1, "email@email.com", testValue)

    expect(emp.office).toBe(testValue);
});

test("use getRole() looking to return 'Manager'", () => {
    const testValue = "Manager"
    const emp = new Manager("sam", 1, "email@email.com", 12345)

    expect(emp.getRole()).toBe(testValue);
});

test("Looking to get office number thru getOffice", () => {
    const testValue = 12345
    const emp = new Manager("sam", 1, "email@email.com", testValue)

    expect(emp.getOffice()).toBe(testValue)
});