{
  type Coffee = {
    shots: number;
    milk: boolean;
  }; //

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

  makeCoffee('oneShot');
}
