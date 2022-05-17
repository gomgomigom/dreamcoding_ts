{
  class User {
    get static fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(private firstName: string, public lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Ellie';
  console.log(user.fullName);
  console.log(user.firstName);
  console.log(user.fullName);
}
