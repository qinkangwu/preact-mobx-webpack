import bind from 'autobind-decorator';
import { observable, action } from 'mobx';

@bind
class CountStore {
  @observable
  count = 0;
  @observable
  increasing = false;

  @action
  reset () {
    if (this.increasing) {
      return;
    }
    this.count = 0;
  }

  @action
<<<<<<< HEAD
  increase (num) {
    if (this.increasing) {
      return;
    }
    this.count+=num;
=======
  increase () {
    if (this.increasing) {
      return;
    }
    this.count++;
>>>>>>> aeb3f5254705ca70f70a837da013f1c75bd4c22e
  }

  @action
  doubleAsync () {
    if (this.increasing) {
      return;
    }
    this.increasing = true;
    setTimeout(() => {
      this.count *= 2;
      this.increasing = false;
    }, Math.random() * 1000);
  }
}

export default CountStore;