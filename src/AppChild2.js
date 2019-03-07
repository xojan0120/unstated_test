import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import CounterContainer from './CounterContainer'

class AppChild2 extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[CounterContainer]}>
          {counter => (
            

            <div>
              これはAppChild2コンポーネント(孫コンポーネント)
              <button onClick={() => counter.decrement()}>-</button>
              {counter.state.count}
              <button onClick={() => counter.increment()}>+</button>
            </div>


          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default AppChild2;
