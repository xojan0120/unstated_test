import React, { Component } from 'react';
import { Provider, Subscribe } from 'unstated';
import CounterContainer from './CounterContainer'
import AppChild1 from './AppChild1'

class App extends Component {
  render() {
    return (
      // Provider: このコンポーネント内でSubscriptコンポーネントが使えるようになる。
      <Provider>
        {/* Subscribe: Containerのstateやメソッドを渡してくれるコンポーネント */}
        <Subscribe to={[CounterContainer]}>
          {/* ↓このcounter(名前は任意)からContainerのstateやメソッドにアクセスできる */}
          {counter => (


            <div>
              これはAppコンポーネント(親コンポーネント)
              <button onClick={() => counter.decrement()}>-</button>
              {counter.state.count}
              <button onClick={() => counter.increment()}>+</button>

              <hr />

              <AppChild1 />
            </div>



          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;
