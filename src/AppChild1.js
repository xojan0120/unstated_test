import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import CounterContainer from './CounterContainer'
import AppChild2 from './AppChild2'

class AppChild1 extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[CounterContainer]}>
          {counter => (
            

            <div>
              これはAppChild1コンポーネント(子コンポーネント)
              <button onClick={() => counter.decrement()}>-</button>
              {counter.state.count}
              <button onClick={() => counter.increment()}>+</button>
              <hr />

              <AppChild2 />
            </div>


          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default AppChild1;
