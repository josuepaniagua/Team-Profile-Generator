var inquirer = require("inquirer");
var fs = require("fs");
var executeTemplate = require("./dist/profileTemplate");
var intern = require("./lib/intern");
var engineer = require("./lib/engineer");
var manager = require("./lib/manager");
var array = [];
var teamMembers = "";


function addteamMember() {

  inquirer

    .prompt([
      {
        name: "position",
        message: "Pick a Position:",
        choices: ["Manager", "Engineer", "Intern"],
        type: "list",
      },

      {
        name: "member",
        message: "Enter Full Name:",
        type: "input",
      },

      {
        name: "idNumber",
        message: "Enter ID number:",
      },

      {
        name: "email",
        message: "Enter email:",
      },
    ])

    .then(({ member, position, idNumber, email }) => {
      var addInfo = "";

      if (position === "Intern") {
        addInfo = "Enter School:";
      } 
      if (position === "Manager") {
        addInfo = "Phone Number:";
      } 
      else {
        addInfo = "GitHub Username:";
      }

      inquirer
      
        .prompt([
          {
            name: "addInfo",
            message: `Enter ${addInfo}`,
          },

          {
            name: "addNewPerson",
            message: "Do you want to add more to the team?",
            choices: ["Yes", "No"],
            type: "list",
          },
        ])

        .then(({ addInfo, addNewPerson }) => {
          var addedteamMembers;

          if (position === "Intern") {
            addedteamMembers = new intern(member, idNumber, email, addInfo);
          } 
          if (position === "Manager") {
            addedteamMembers = new manager(member, idNumber, email, addInfo);
          } 
          else {
            addedteamMembers = new engineer(member, idNumber, email, addInfo);
          }

          array.push(addedteamMembers);
          executeTemplate(addedteamMembers).then((data) => {
            teamMembers += data;
            if (addNewPerson === "Yes") {
              addteamMember();
            } 
            else {
              var document = teamTemplate(teamMembers);
            }
          });
        });
    });
};

function teamTemplate(teamMembers) {
  var document = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="../dist/style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
    </head>
  <body>
  <div class="teamMemberContainer">
    <div class="mainContainer">
      ${teamMembers}
    </div>
  </body>
</html>
`;

  fs.writeFile("./src/teamProfile.html", document, (err) => {
    if (err) {console.log(err);}});
  return document;
}

function start() {
  teamTemplate();
  addteamMember();
}

start();