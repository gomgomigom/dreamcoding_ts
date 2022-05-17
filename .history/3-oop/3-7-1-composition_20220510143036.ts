{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log(' make milk steam 🥛');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk;
      return { ...cup, hasMilk: true };
    }
  }

  class MakeSugar {
    private sugar(): boolean {
      console.log('get a sugar from candy🍬');
      return true;
    }
    makeSugar(coffee: CoffeeCup): CoffeeCup {
      const sugar = this.sugar();
      return { ...coffee, hasSugar: sugar };
    }
  }
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private sugar: MakeSugar
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  class SweetCafeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      public readonly serialNumber: string,
      private milk: CheapMilkSteamer,
      private sugar: MakeSugar
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.makeSugar(coffee));
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
  const milkSteamer = new CheapMilkSteamer();
  const sugar = new MakeSugar();
  const sclm = new SweetCafeLatteMachine(22, '1', milkSteamer, MakeSugar);
  console.log(sclm.makeCoffee);
}
