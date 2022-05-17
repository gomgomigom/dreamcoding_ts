{
  type SuccessState = {
    result: 'success';
    response: { body: string };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function printLoginState(state: LoginState) {
    state.result === 'success'
      ? console.log(`🎆 ${state.response.body}`)
      : console.log('😢');
  }
  printLoginState({ response: { body: 'hi' } });
}
