function createStore() {
  let state;

  //Redux works by having an action dispatched, which calls a reducer, and 
  //then renders the view.
  // state is now accessible to dispatch
  function dispatch(action){
    state = reducer(state, action);
    render();
  }


  //This method simply returns the state so we can use it elsewhere in our 
  //application. We will also need to add getState to the object our createStore function returns.
  function getState() {
    return state;
  }

  return { dispatch, getState };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState.count;
};

//// createStore takes the reducer as an argument
let store = createStore(reducer)

store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})
