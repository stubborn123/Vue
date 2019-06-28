//生命周期钩子
//我们将实例挂在Dom上，数据变化时更新Dom，像不像一个钩子把实例挂在Dom上
//生命周期钩子其实是函数，给用户不同阶段更新代码的机会

var vm = new Vue({
    el:"#hook",
    data:{
      a: 1
    },
    _created: function () {
      // `this` 指向 vm 实例
      console.log('a is: ' + this.a);
    },
    get created() {
      return this._created;
    },
    set created(value) {
      this._created = value;
    },
})


