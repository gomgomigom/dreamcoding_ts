{
  type Coffee = {
    shot: number;
    milk: boolean;
  }; //

  class CoffeeMachine {
    private static COFFEE_GRAM: number = 10;
    private coffeeBeans: number = 0;
    private shot: number;

    private constructor(shot: number, coffeeBeans: number) {
      this.shot = shot;
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(shot: number, coffeeBeans: number): CoffeeMachine {
      shot *= 2;
      return new CoffeeMachine(shot, coffeeBeans);
    }

    fillCoffeeBeans(beans: number): void {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0!');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shot: number): Coffee {
      if (this.coffeeBeans < shot * CoffeeMachine.COFFEE_GRAM) {
        throw new Error(`coffeeBeans is out of stock! `);
      }
      this.coffeeBeans -= shot * CoffeeMachine.COFFEE_GRAM;
      return { shot, milk: false };
    }
  }

  const maker2 = CoffeeMachine.makeMachine(1, 30);
  console.log(maker2);
  maker2.fillCoffeeBeans(20);
}
