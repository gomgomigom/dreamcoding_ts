{
  class User {
    firstName: string;
    static get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, public lastName: string) {
      this.firstName = firstName;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(User.fullName);
}
