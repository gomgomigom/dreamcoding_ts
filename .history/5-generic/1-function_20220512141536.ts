{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time!!');
    }
    workFullTime() {
      console.log('workFullTime!!');
    }
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

  function pay2(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  pay2(ellie);
  pay2(bob);
  const payEllie = pay2(ellie);
  const payUpgradeEllie = payUpgrade(ellie);

  payEllie.pay();
  payUpgradeEllie.workFullTime();

  console.clear();

  const obj = {
    name: 'gom',
    age: 30,
  };
}
