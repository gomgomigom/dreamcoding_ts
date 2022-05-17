{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(request: ResourceLoadState) {
    switch (request.state) {
      case 'loading':
        console.log('loading...');
        break;
      case 'success':
        console.log(request.response.body);
        break;
      case 'fail':
        console.log(request.reason);
    }
    request.state === 'loading' && console.log('💀 loading..');
    request.state === 'success' && console.log('⌣ loaded');
    request.state === 'fail' && console.log('😇 no network');
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
