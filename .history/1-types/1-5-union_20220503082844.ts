{
  // Union Types
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  type SuccessState = {
    nameresponse: {
      body: string;
    };
  };

  function login(): SuccessState | FailState;
}
