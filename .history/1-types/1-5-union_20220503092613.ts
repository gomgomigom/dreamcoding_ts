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
  function login(id: string, password: string): LoginState {
    return { response: { body: 'hi' } };
  }
}

{
  type SuccessState = { response: { body: string } };
  type FailState = { reason: string };
  type LoginState = SuccessState | FailState;
  function printLoginState(state: LoginState) {
    'response' in state
      ? console.log(`🎆 ${state.response.body}`)
      : console.log('😢');
  }
}
printLoginState({ response: { body: 'hi' } });
