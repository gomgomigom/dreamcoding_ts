{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.)
}
