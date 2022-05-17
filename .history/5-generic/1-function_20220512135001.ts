{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    par() {
      console.log('full time!!');
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time!!');
    }
    workPartTime() {}
  }
}
