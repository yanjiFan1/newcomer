### js中常用的数据类型
- 基本数据类型
    + 数字number(常规数字和NaN)
    + 字符串string  
        单引号、双引号、反引号包起来的都是字符串
    + 布尔bollean
    + 空对象指针null
    + 未定义undefined
- 引用数据类型
    + 对象数据类型object
        + {} 普通对象
        + [] 数组对象
        + 正则表达式 正则对象
        + Math数学函数对象
        + 日期对象
        + ...
    + 函数数据类型 function  

### number数字类型
> 包含：常规数字、NaN
### NaN
> not a number:不是一个数，但是它属于数字类型  
js和任何值都不相等，包括自己
### isNaN
> 检测一个值是否为非有效数字，如果不是有效数字返回True,如果是返回False  

在使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()这个方法，把值转换为数字类型，然后再检测
```
isNaN('10') ->FALSE
isNaN('AA') ->TRUE
```
### 把其他类型转换为数字类型
- Number([val])
- parseInt/parseFloat([val],[进制])：转换为数字，对于字符串，从左往右查找有效数字字符，知道遇到非有效数字字符，停止查找，不管后面还有没有，都不找了。
- ==进行比较的时候，可能要出现把其他类型值转换为数字
```
//字符串转换为数字
console.log(Number('12.5');//=>12.5
console.log(Number(''));//=>0
consloe.log(Number('12.5PX');//=>NaN

//布尔类型转换为数字
console.log(Number(false);//=>0
console.log(isNaN(false));//=>false

//null->0 undefined->NaN
console.log(Number(undefined));//=>NaN
console.log(Number(null));//=>0

//把引用数据类型转换为数字，是先把它基于toString方法转换为字符串，然后转换为数字
console.log(Number({name:'10'}));//=>NaN
console.log(Number({}));//=>NaN
console.log(Number([]));//=>0
console.log(Number([12]));//=>12
console.log(Number([12,13]));//=>NaN

//
let str = '12.5px';
console.log(parseInt(str));//=>12
console.log(parseFloat(str));//12.5
```  
### 字符串string  
### 把其他类型转换为字符串
- [var].toString()
- 字符串拼接
```
console.log('10' + 10);//=>'1010'
console.log('10' - 10);//=>0
console.log('10px' - 10);//=>NaN
let a = 10 + null + true + [] + undefined + 'hello' + null + [] + 10 + false//=>'11undefinedhellonull10false'
```
> null和undefined是禁止toString的  
> 普通对象.toString()的结果是 "[object Object]"=>?=>Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的 
> 正则表达式转换为字符串  

### 布尔类型
> 只有两个值 true/false

### 把其他类型值转换为布尔类型
> 只有 0、NaN、''、null、undefined五个值转换为FALSE,其余都转换为TRUE    
> !取反 ！！取反再取反
- Boolean([val])
- !/!!
- 条件判断
### null / undefined
> null和undefined都代表的是没有  
> null：表示意料之中
```
let num = null;
num = 12
```
> undefined: 预料之外
```
let num;//=>创建一个变量没有赋值，默认值为undefined
```
### object对象数据类型-普通对象
> {[key]:[value],...} 任何一个对象都是零到多组键值对（属性名：属性值组成的（并且属性名不能重复））  
```
let person={
  name: '张三',
  age: 20,
  height: '180cm',
  weight: '130kg',
};
console.log(person.name);//获取对象的属性值
person.sex = '男';//添加属性名和属性值
person.height = '185cm';//修改属性值
console.log(person['sex']);
//删除
delete person.weight; //真删除
person.weight = null;//假删除
```
1. 对象名.属性名
2. 对象[属性名] 属性名是数字或者字符串格式的
3. 如果当前属性名不存在，默认的属性值是undefined
4. 如果属性名是数字，则不能使用点的方式获取属性值

>数组对象  
> 1. 索引从0开始,连续递增
> 2. length,存储数组长度
##### 堆栈底层机制
浏览器想要执行代码：  
1.从电脑内存中分配出一块内存，用来执行代码（栈内存 => Stack）  
2.分配一个主线程用来自上而下执行js代码  
> 基本类型：按值操作。也叫做值类型
> 引用类型：按引用地址操作。堆内存地址
```
let array=[12,'hello',true,13];
console.log(array.length);
console.log(array[1]);
console.log(array[array.length-1]);//输出最后一个元素
array[array.length] = 100;//向数组末尾追加元素
console.log(array);

//堆栈底层机制
let a = 12; //创建变量a,放在当前栈内存变量存储区域中，a在变量存储空间，12在对应的值存储空间
let b = a; //把a的值赋值给b,但是a的值仍为12
b = 13;
console.log(a); //a = 12

/*复杂值（引用类型值）的存储
*1. 在内存中分配出一块新内存，堆内存，存储引用类型值
*2. 把队形的键值对（属性名：属性值）依次存储到堆内存中
*3. 把堆内存地址和变量关联起来
*/
let n = {  
    name: 'hello'
};
let m = n;
m.name = 'world';
console.log(n.name); //输出world
```
