{
  type Coffee = {
    shots: number;
    milk: boolean;
  }; //

  const COFFEE_GRAM: number = 10;
  let coffeeBeans: number = 0;
  function makeCoffee(shot: number): Coffee {
    if (coffeeBeans < shot * COFFEE_GRAM) {
      throw new Error(`coffeeBeans is out of stock! `);
    }
  }

  makeCoffee('oneShot');
}
