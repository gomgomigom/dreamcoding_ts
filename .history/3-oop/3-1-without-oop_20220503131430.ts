{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}

{
  //
  let coffee: number = 0;
  type Shot = 'oneShot' | 'twoShot' | 'threeShot';
  function makeCoffee(command: Shot): void {
    switch (command) {
      case 'oneShot':
        coffee++;
        break;
      case 'twoShot':
        coffee = coffee + 2;
        break;
      case 'threeShot':
        coffee = coffee + 3;
        break;
      default:
        throw new Error('Unknown command: ' + command);
    }
  }

  makeCoffe('oneShot');
}
