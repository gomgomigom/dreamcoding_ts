{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Ellie';
  console.log(user.fullName);
  console.log(user.firstName);
  console.log(user.fullName);
}
