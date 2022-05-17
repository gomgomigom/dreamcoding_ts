{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
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

  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  pay(ellie);
  pay(bob);
}
