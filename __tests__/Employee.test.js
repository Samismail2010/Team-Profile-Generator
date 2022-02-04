const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const emp = new Employee()

    expect(typeof(emp)).toBe('object');
});

test("get name from a getName method", () => {
    const testName = "Sam";
    const emp = new Employee(testName);

    expect(emp.getName()).toBe(testName);
});

test("Can set id thru testId", () => {
    const testId = 100;
    const emp = new Employee("Sam",testId);

    expect(emp.getId()).toBe(testId);
});

test("Can set email thru getEmail", () => {
    const testEmail = "email@email.com";
    const emp = new Employee("Sam", 1 , testEmail);

    expect(emp.getEmail()).toBe(testEmail);
});

test("Will be testing role.", () => {
    const returnValue = "Employee";
    const emp = new Employee("Sam", 100, "email@email.com");

    expect (emp.getRole()).toBe(returnValue);
});