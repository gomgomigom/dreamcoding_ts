{
  type Coffee = {
    shot: number;
    milk: boolean;
  }; //

  const COFFEE_GRAM: number = 10;
  let coffeeBeans: number = 0;
  function makeCoffee(shot: number): Coffee {
    if (coffeeBeans < shot * COFFEE_GRAM) {
      throw new Error(`coffeeBeans is out of stock! `);
    }
    coffeeBeans -= shot * COFFEE_GRAM;
    return { shot, milk: false };
  }

  coffeeBeans = COFFEE_GRAM * 3;
  console.log(makeCoffee(1));
  console.log(makeCoffee(2));
  console.log(makeCoffee(2));

  class CoffeeMachine {
    static COFFEE_GRAM: number;
    coffeeBeans: number = 0;
    shot: number;
    constructor(shot, coffeeBeans) {
      this.shot = shot;
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shot: number): Coffee {
      if (this.coffeeBeans < shot * this.COFFEE_GRAM) {
        throw new Error(`coffeeBeans is out of stock! `);
      }
      this.coffeeBeans -= shot * this.COFFEE_GRAM;
      return { shot, milk: false };
    }
  }

  const maker = new CoffeeMachine(1, 22);
  console.log(maker);
}
