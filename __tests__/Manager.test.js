const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Drew', '1138', 'drewjspeed@gmail.com', '33b');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    
});

test('gets manager office number', () => {
    const manager = new Manager('Drew', '1138', 'drewjspeed@gmail.com', '33b');

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});

test('checks role of employee', () => {
    const manager = new Manager ('Drew', '1138', 'drewjspeed@gmail.com', '33b');

    expect(manager.getRole()).toEqual('Manager');
})