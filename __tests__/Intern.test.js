const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Drew', 1138, 'drewjspeed@gmail.com', 'UT');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    
});

test('gets school of intern', () => {
    const intern = new Intern('Drew', 1138, 'drewjspeed@gmail.com', 'UT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('checks role of employee', () => {
    const intern = new Intern ('Drew', 1138, 'drewjspeed@gmail.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
})