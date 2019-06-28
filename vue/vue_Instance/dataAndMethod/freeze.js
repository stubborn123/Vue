//响应式的对象里面的变量属性，会随着变化更新响应在view上
var data = {
    id:1,
    text:"这是没更改前的text"
}

var vm = new Vue({
    el:"#freezeTest",
    data:data
})

vm.text = data.text 

//这个没搞出来,原因有点小奇怪，连vue developtol 都显示这不是一个vue？----> 已解决，就是属性值没写对，data:data 相当于赋值，访问属性没必要再加一层
// 这个方法就是把这个东西freeze主，不能修改，类似我们那个static静态声明关键词
Object.freeze(data)