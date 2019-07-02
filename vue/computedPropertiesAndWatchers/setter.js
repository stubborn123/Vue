var vm = new Vue({
    el: '#setter',
    data: {
        firstName: 'Foo2333',
        lastName: 'Bar2333',
        // fullName: ''
      },
    computed: {
        fullName: {
            // getter
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
          }
    }
  })
  //在开发者模式console或者vue developtool的console（其实两者是一样的）上输入vm.fullName = 'John Doe'