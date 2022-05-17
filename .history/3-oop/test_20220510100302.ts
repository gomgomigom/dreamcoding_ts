{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(public firstName: string, public lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(User.fullName);
}
