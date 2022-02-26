// Manager card
const generateManager = function(manager) {
    return `
<div class="col-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2>${manager.name}</h2>
            <h3><i class="bi bi-cup"></i> Manager</h3>
        </div>
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
<div class="col-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2>${engineer.name}</h2>
            <h3><i class="bi bi-eyeglasses"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id} </p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="office">Github: <a href="github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

// Intern card
const generateIntern = function(intern) {
    return `
<div class="col-4 mt-3">
    <div class="card">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h3><i class="bi bi-mortarboard"></i> Intern</h3>
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id} </p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="office">School: ${intern.school}</p>
        </div>
    </div>
</div>
`;
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
    <title>Generated Team</title>
</head>
<body>
    
</body>
</html>

module.exports = generateHTML;
`
}