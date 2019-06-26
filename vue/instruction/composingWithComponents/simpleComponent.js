// 这个是组件的实例穿件，名字就是item-example
Vue.component("item-example",
    {
        //这个props很有意思，翻译过来支柱，传递数据
        props:['list'],
        //template 模板
        template:"<li>{{list.text}}</li>"
    })

var app = new Vue({
    el:"#simpleComponent",
    data:{
        exampleList:[{id:1, text:"组件显示11111111111."},
                    {id:2, text:"组件显示222222222."},
                    {id:3, text:"组件显示333333333."}]
    }
})

