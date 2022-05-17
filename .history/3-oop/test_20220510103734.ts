{
  class User {
    static get number(): number {
      return 343;
    }

    private internalAge = 2;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(public firstName: string, public lastName: string) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(User.number);
  user.age(45);
}
