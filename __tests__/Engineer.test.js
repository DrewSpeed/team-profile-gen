const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Drew', 1138, 'drewjspeed@gmail.com', 'DrewSpeed');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    
});

test('gets engineer github', () => {
    const engineer = new Engineer('Drew', 1138, 'drewjspeed@gmail.com', 'DrewSpeed');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('checks role of employee', () => {
    const engineer = new Engineer ('Drew', 1138, 'drewjspeed@gmail.com', 'DrewSpeed');

    expect(engineer.getRole()).toEqual('Engineer');
})