var loop = new Vue({
    el:"#loopTest",
    data:{
        list:[
            {text:'这是第一个'},
            {text:'这是第二个'},
            {text:'这是第三个'} 
        ]
    }

    // 这个你在控制台打印  app4.todos.push({ text: '这是第四个' }) 可以看到页面变化
})