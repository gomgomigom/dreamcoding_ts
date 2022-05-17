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
    response: {
      body: string;
    };
  };
  type FailState = { reason: string };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): Promise<LoginState> {
    return { response: { body: 'logged in!' } };
  }
}
