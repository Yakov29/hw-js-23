class Account {
    constructor({ login, email }) {
      this.login = login;
      this.email = email;
    }
  
    getInfo() {
      console.log(`Login: ${this.login}, Email: ${this.email}`);
    }
  }
  