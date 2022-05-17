/**
 * Let's make a game 🕹
 */
{
  type Position = { x: number = 0; y: number };
  type Command = 'up' | 'down' | 'left' | 'right';
  function move(command: Command): Position {
    switch (command) {
      case 'up':
        return;
    }
  }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
