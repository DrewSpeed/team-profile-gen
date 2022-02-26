const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Drew', 1138, 'drewjspeed@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

test('gets employee id', () => {
    const employee = new Employee('Drew', 1138, 'drewjspeed@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Drew', '1138', 'drewjspeed@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})
test('gets employee Role', () => {
    const employee = new Employee ('Drew', '1138', 'drewjspeed@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})