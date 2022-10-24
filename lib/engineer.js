var Employee = require("./employee");

class engineer extends Employee {
  constructor(member, idNumber, email, githubAccount) {
    super(member, idNumber, email);
    this.githubAccount = githubAccount;
  }

  getRole() {
    return "engineer";
  }

  getGithub() {
    return this.githubAccount;
  }
}

module.exports = engineer;