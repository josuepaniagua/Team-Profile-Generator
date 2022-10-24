var Employee = require("./employee");

class manager extends Employee {
  constructor(member, idNumber, email, phoneNumber) {
    super(member, idNumber, email);
    this.phoneNumber = phoneNumber;
  }

  getRole() {
    return "manager";
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}

module.exports = manager;