这部分是根据vue官方文档学习的整理：
目前Vue的官方文档非常不错，不仅有例子甚至还有专门的的视频demo讲解演示，虽然是英语，目前看的还可以。
文档体验很好，看文档的能力也是一个码农一个必备技能，好的文档真的是积德行善造福大家。

Instruction 介绍

1 install 安装

2 declare renting 声明式渲染 
declare 简单的声明的小例子
bind 简单绑定的小例子（通过span这个元素，绑定一个显示字样

3 condition and renting 条件与循环
condition v-if的使用，if作为条件判断肯定是好不了的
loop v-for的使用，我们有一个数组要遍历他并展示在页面上，怎么做？ 采用v-for，声明好数组，然后在要遍历的地方采用
<ol v-for="  item in list ">
    <li>{{item}}</li>
</ol>
当然不是一定要用ol标签，你用div套div也一样，只不过ol提供了一个序列号的东西。

4 handle user input 处理用户输入
reserve 利用v-on 添加一个click事件处理将一个字符串导致
model 利用v-model 双向绑定，怎么个双向绑定，一个值在两（多）处使用利用v-model，一处改变出处改变，当然这是我的理解。

5  composing with components 组件构建
新的一个东西 就是这个vue 的component ，组件有一个好处除了简化以外，你还能把它当成公共部分 解耦优化代码
例子里面 有component 的id props（翻译是支柱，其实我觉得用翻译成道具也可以，输出数据）template 模板


the Vue Instance Vue 实例
这个mvvm模型了解一下
![avatar](https://s2.ax1x.com/2019/06/26/ZeLQEt.png)



