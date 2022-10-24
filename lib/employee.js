class employee {
    constructor(member, idNumber, email,) {
      this.member = member;
      this.idNumber = idNumber;
      this.email = email;
    }
  
    getName() {
      return this.member;
    }
  
    getId() {
      return this.idNumber;
    }
  
    getEmail() {
      return this.email;
    }
    
    getRole() {
      return "employee";
    }
  }
  
  module.exports = employee;