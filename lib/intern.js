var Employee = require("./employee");

class intern extends Employee {
  constructor(member, idNumber, email, education) {
    super(member, idNumber, email);
    this.education = education;
  }

  getRole() {
    return "intern";
  }

  getSchool() {
    return this.education;
  }
}

module.exports = intern;