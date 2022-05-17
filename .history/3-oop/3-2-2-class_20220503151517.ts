{
  type Coffee = {
    shot: number;
    milk: boolean;
  }; //

  class CoffeeMachine {
    COFFEE_GRAM: number = 10;
    coffeeBeans: number = 0;
    shot: number;

    constructor(shot: number, coffeeBeans: number) {
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
