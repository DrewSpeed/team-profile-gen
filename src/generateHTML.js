// Manager card
const generateManager = function(manager) {
    return `
<div class="col-9 col-lg-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${manager.name}</h2>
        </div>
            <h3 class="text-center mt-2"><i class="bi bi-briefcase"></i> Manager</h3>
        <div class="card-body">
            <p class="id">ID: ${manager.id} </p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
`;
}

// Engineer card
const generateEngineer = function(engineer) {
    return `
<div class="col-9 col-lg-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${engineer.name}</h2>
        </div>
            <h3 class="text-center mt-2"><i class="bi bi-eyeglasses"></i> Engineer</h3>
        <div class="card-body">
            <p class="id">ID: ${engineer.id} </p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="office">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

// Intern card
const generateIntern = function(intern) {
    return `
<div class="col-9 col-lg-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2 class="text-center">${intern.name}</h2>
        </div>
            <h3 class="text-center mt-2"><i class="bi bi-mortarboard"></i> Intern</h3>
        <div class="card-body">
            <p class="id">ID: ${intern.id} </p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="office">School: ${intern.school}</p>
        </div>
    </div>
</div>
`;
}

generateHTML = (data) => {
    pageArray = [];

    data.forEach(employee => {
        role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    })

    employeeCards = pageArray.join('');
    pageMaker = generatePage(employeeCards);
    return pageMaker
}





const generatePage = function () {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="mb-2 h1 display-3 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
            <!-- Team Cards -->
            ${employeeCards}
            </div>
        </div>
    </main>
</body>
</html>

`
}

module.exports = generateHTML;
