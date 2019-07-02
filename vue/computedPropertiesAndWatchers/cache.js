var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello',
      date:""
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },

      initDate: function () {
        return Date.now();
      }
    },

    methods: {
        now: function () {
            var funNow = Date.now();
            this.date = funNow
            return this.date
          }  
    },
  })