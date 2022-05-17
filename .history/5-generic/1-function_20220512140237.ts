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

  function payUpgrade<E extends Employee>(employee: E | null): E {
    if (employee == null) {
      throw new Error('not a valid');
    }
    employee.pay();
    return employee;
  }

  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  pay(ellie);
  pay(bob);
  const payEllie = pay(ellie);
  const payUpgradeEllie = payUpgrade(ellie);

  payEllie.pay;
  payUpgradeEllie.workFullTime;
}
