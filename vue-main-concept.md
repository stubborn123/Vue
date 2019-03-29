<h1>VUE 主要概念</h1><br>
tips：突然发现在VS code 上写markdown文档体验还蛮不错哦，不愧是天下第一IDE(误操作发现IDEA也可以，尴尬)。<br>
组件的组成<br>
Vue组件含义：在VUE中一个组件相当于一个实例（实例听起来是不是很熟悉，含有对象什么的理解起来是不是要好一点。）

Vue组件的生成与使用:通过new Vue() 函数创建来使用,来我盗一个图贴上。创建实例的例子，来自官方文档例子。<br>

```HTML
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```
```JS
<div id="components-demo">
  <button-counter></button-counter>
</div>
```

```JS
new Vue({ el: '#components-demo' })
```
<br>
<br>
<img src="https://static001.geekbang.org/resource/image/d8/c3/d85b1cf0f9f76414e1a0fca86c2a58c3.jpeg">
（1）属性

