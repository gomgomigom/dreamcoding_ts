{
  type Coffee = {
    shot: number;
    milk: boolean;
  }; //

  class CoffeeMachine {
    static COFFEE_GRAM: number = 10;
    coffeeBeans: number = 0;
    shot: number;

    constructor(shot: number, coffeeBeans: number) {
      this.shot = shot;
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(shot: number, coffeeBeans: number): CoffeeMachine {
      shot *= 2;
      return new CoffeeMachine(shot, coffeeBeans);
    }

    makeCoffee(shot: number): Coffee {
      if (this.coffeeBeans < shot * CoffeeMachine.COFFEE_GRAM) {
        throw new Error(`coffeeBeans is out of stock! `);
      }
      this.coffeeBeans -= shot * CoffeeMachine.COFFEE_GRAM;
      return { shot, milk: false };
    }
  }

  const maker = new CoffeeMachine(1, 22);
  console.log(maker);

  const maker2 = CoffeeMachine.makeMachine(1, 30);
  console.log(maker2);
}
