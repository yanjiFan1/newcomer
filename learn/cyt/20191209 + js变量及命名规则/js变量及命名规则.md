### js做客户端语言
> 按照相关的js语法，去操作页面中的元素，有时候还要操作浏览器里面的一些功能
> - ECMAScript3/5/6...:js的语法规范（变量、数据类型、操作语句等等）
> - DOM（document object model）:文档对象模型，提供一些js的属性和方法，用来操作页面中的DOM元素。
> - BOM(browser object model):浏览器对象模型，提供一些js的属性和方法，用来操作浏览器的  

### js中的变量(variable)
> 变量：可变的量，存储和代表不同的值

```
//ES3/es5
var a=12;
console.log(a); //输出12

//ES6
let b=100; 
b=200;

const c=1000; //const创建的变量值不允许修改（常量）

//创建函数相当于创建变量
function f() {}
//创建类也相当于创建变量
class A{}
//ES6的模块导入也可以创建变量
import B from './B.js';
//symbol创建唯一值
let n=Symbol(100);
let m=Symbol(100);
//m和n不相等

```

### JS的命名规范  
https://www.cnblogs.com/Hsong/p/9016950.html
- 严格区分大小写
- 使用数字、字母、下划线、$、数字不能作为开头
- 项目命名
> 全部采用小写方式，以下划线分割。例如：my_project_name
- 目录命名
> 参照项目命名规则；有复数结构时，要采用复数命名法
- JS文件命名
1. 变量：必须采用小驼峰命名法
2. 常量：必须采用全大写的命名，且单词以_分割。
3. 函数
> + 小驼峰式命名法
> + 前缀应当为动词
> + 可使用常见动词约定（can/has/is/get/set/load）
4. 类&构造函数
> 大驼峰式命名法，首字母大写
> 前缀为名称
5. 类的成员
> - 公有属性和方法：跟变量和函数的命名一样。
> - 私有属性和方法：前缀为_ 后面跟公有属性和方法命名一样
### 注释规范
1. 行内注释
```
function test() { 测试函数
    console.log('hello world!'); // >hello world!
    return 3 + 2; // ->5
}
```
2. 单行注释
> 双斜线，单独一行
3. 多行注释
> /* 注释说明 */
4. 函数（方法）注释
```
/**
* 函数说明
* @关键字
*/
```
注释名 | 语法 | 含义 |示例
---|---|---|---
@param | @param 参数名 {参数类型} 描述信息 | 描述参数的信息 | @param name {String} 传入名称 
@return | @return {返回类型} 描述信息 | 描述返回值的信息 | @return {Boolean} true:可执行;false:不可执行 
@author | @author 作者信息 [附属信息：如邮箱、日期] | 描述此函数作者的信息 | @author 张三 2015/07/21 
@version | @version XX.XX.XX | 描述此函数的版本号 | @version 1.0.3 
|@example | @example 示例代码 | 演示函数的使用 | @example setTitle(‘测试’) 
### 不保存this引用,使用function#bind
```
function(){
    return function(){
        console.log(this);
    }.bind(this);
}
```
### 给函数命名，对堆栈轨迹很有用
```
var log = function log(mag) {
    console.log(msg);
}
```
### 文件导出一个类，文件名应该与类名完全相同
```
class CheckBox{
    //...
}
module.exports = CheckBox;
var CheckBox = require('./CheckBox');
```
### 模块
+ 模块应该以 ! 开始。这样确保了当一个不好的模块忘记包含最后的分号时，在合并代码到生产环境后不会产生错误。详细说明
+ 文件应该以驼峰式命名，并放在同名的文件夹里，且与导出的名字一致。
+ 增加一个名为 noConflict() 的方法来设置导出的模块为前一个版本并返回它。
+ 永远在模块顶部声明 'use strict';。
```
// fancyInput/fancyInput.js

!function (global) {
  'use strict';

  var previousFancyInput = global.FancyInput;

  function FancyInput(options) {
    this.options = options || {};
  }

  FancyInput.noConflict = function noConflict() {
    global.FancyInput = previousFancyInput;
    return FancyInput;
  };

  global.FancyInput = FancyInput;
}(this);
```
### 构造函数
+ 给对象原型分配方法，而不是使用一个新对象覆盖原型。覆盖原型将导致继承出现问题：重设原型会导致继承出现问题：重设原型会覆盖原有原型！
```
function Jedi() {
  console.log('new jedi');
}

// bad
Jedi.prototype = {
  fight: function fight() {
    console.log('fighting');
  },

  block: function block() {
    console.log('blocking');
  }
};

// good
Jedi.prototype.fight = function fight() {
  console.log('fighting');
};

Jedi.prototype.block = function block() {
  console.log('blocking');
};
```
+ 方法可以返回this来实现方法链式使用
```
// bad
Jedi.prototype.jump = function jump() {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function setHeight(height) {
  this.height = height;
};

var luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
Jedi.prototype.jump = function jump() {
  this.jumping = true;
  return this;
};

Jedi.prototype.setHeight = function setHeight(height) {
  this.height = height;
  return this;
};

var luke = new Jedi();

luke.jump()
  .setHeight(20);
```





