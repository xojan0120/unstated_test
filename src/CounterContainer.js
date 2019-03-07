import { Container } from 'unstated';

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

export default CounterContainer;
