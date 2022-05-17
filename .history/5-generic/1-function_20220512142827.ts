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

  const obj2 = {
    animal: '🐕',
  };

  console.log(getValue(obj, 'name')); // gom
  console.log(getValue(obj, 'age')); // 30
  console.log(getValue(obj2, 'animal')); // 🐕

  function getValue(obj: object, key: string): void {
    console.log(obj);
  }
}
