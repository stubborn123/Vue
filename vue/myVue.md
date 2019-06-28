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
补充知识：
MVVM：这个mvvm模型了解一下.view 和 model 之间还有一个 viewModel来处理中间的交互逻辑，相当于绑定databind，举个例子view页面触发事件需要逻辑交互viewmodel来负责这个逻辑。model模型层你可以看成后端，他那边有什么变化要在前端展示，通过viewmodel视图模型作为中间商打通中间环节。（小程序那一套就很mvvm，vue也是，只不过谁更严格的像这个框架）
[wiki关于MVVM](https://zh.wikipedia.org/wiki/MVVM)
![avatar](https://s2.ax1x.com/2019/06/26/ZeLQEt.png)
文档中会用vm来代表vue实例，vm取自viewmodel





template syntax 模板语法
1 插值 提到了一个“Mustache”语法，也就是常见的双大括号的那种形式，很多文本绑定都是这种
文档一个注意事项是关于数据绑定，容易XSS攻击（就是用户输入一段而已js，把这个东西返回过来得时候，会被执行。---工作中是通过encode来解决）
实际上这种风险确实存在的，是要注意的，但是提示给的解决是少用提供给客户这种插值，虽然是一种方式但也不能不给人家从实际业务上。
多种方式上规避把--据说vue也有一套对应的措施

2 特性 这个双大括号的“Mustache”语法，不能作用的HTML特性上（所谓不能作用在HTML上，就是你只接给值人家不认识不接受）
所以要用在Html上让HTML识别出来要用到 v-bind（前面声明式渲染就有相关例子）