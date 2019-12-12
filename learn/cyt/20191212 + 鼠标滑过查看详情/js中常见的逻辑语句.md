### js中的数据类型检测
- typeof [val]: 用来检测数据类型的运算符
> typeof null => "object"    
> typeof NaN => "number"  
> typeof undefined => "undefined"  
> typeof 普通对象 数组 正则 => "object"  
```
console.log(typeof typeof typeof[]); //结果为"string"
```

### js中的操作语句： 判断、循环
#### 判断
> 条件成立做什么？不成立做什么？
- if/else if/else
- 三元运算符
- switch case

1. if/else
```
if(条件){
    执行语句1
}else if(条件2){
    执行语句2
}else{
    以上条件都不成立执行语句3
}
```

2. 三元运算符
> 条件？条件成立处理的事情 ：不成立处理的事情；  
> 1.如果处理的事情比较多，用括号包起来，没一件事情用逗号分隔  
> 2.如果不需要处理事情，可以使用null/undefined占位  
> + 简单的if-else处理，复杂的尽量不要用
```
let a = 10;
a >= 10 ? console.log('呵呵') : console.log('哈哈')；
// a >= 10 ? (a++,console.log(a) : null;
```
3. switch case
> 1. 每一种case情况结束后最好都加上break
> 2. default 等价于else,以上都不成立干的事情
> 3. 不加break,当前条件成立执行完成后，后面条件不论是否成立都要执行，知道遇到break为止。(不加break可以实现变量在某些值的情况下做相同的事情)
> 3.每一种case情况的比较用的三个等号(绝对相等)
```
let a = 10;
switch (a) {
    case 1:
        console.log('呵呵');
        break;
    case 5:
        console.log('哈哈');
        break;
    case 10:
        console.log('嘿嘿');
        break;
    default:
        console.log('嘻嘻');
}

let a = 10;
if(a==1) {
    console.log('呵呵')；
}else if (a==5) {
    console.log('哈哈');
}else if (a==10) {
    console.log('嘿嘿');
}else{
    console.log('嘻嘻');
}
```
#### == 和 === 的区别
1. == ：相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较) '5'==5 => TRUE
2. === :绝对相等(如果类型不同，肯定不相等) '5'===5 => FALSE