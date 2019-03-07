import React, { Component } from 'react';
import { Provider, Subscribe, Container } from 'unstated';

// 参考：https://qiita.com/kaba/items/b05f680f850dd46548f3

// Container: state管理のためのコンポーネント
class CounterContainer extends Container {
  state = {
    count: 0
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }
}

//class Counter extends Component {
//  render() {
//    return (
//      <Subscribe to={[CounterContainer]}>
//        {counter => (
//          <div>
//            <button onClick={() => counter.increment()}>+</button>
//            <div>{counter.state.count}</div>
//            <button onClick={() => counter.decrement()}>-</button>
//          </div>
//        )}
//      </Subscribe>
//    )
//  }
//}

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
              <button onClick={() => counter.increment()}>+</button>
              <div>{counter.state.count}</div>
              <button onClick={() => counter.decrement()}>-</button>
            </div>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;
