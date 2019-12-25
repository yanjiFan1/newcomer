### forEach迭代遍历  
> 让数组的每一项分别去做一件事情，无返回值
```
let a = [1,2,3]
a.forEach(function(value,i) {
    console.log("第" + (i+1) + "项:" + value);
    return value; //undefined
})  
    //第1项：1
    //第2项：2
    //第3项：3
```
### map(映射)：返回的是一个新数组，不改变原来的数组
```
let a = [1,2,3]
a.map(function(value,i) {
    return value *2;//[2,4,6]
})  
```
### reduce(累计)
> 该方法接收一个函数作为累加器，数组中的每个值(从左到右)开始缩减，最终计算成一个值。reduce可以作为一个高阶函数，用于函数的compose.
```
let a = [1,2,3]
a.reduce(function(prev + next) {
    return prev + next;// 1+2+3=6
})  
```
### filter(过滤)
```
let a = [1,2,3];
a = a.filter(function(value,i) {
    return value >2;
})  
console.log(a); //3

```
### every(全部)
> 判断每一个元素是否全部满足条件，有的话返回true,否则返回false
```
let a = [1,2,3];
a = a.every(function(value,i) {
    return value >2;
})
console.log(a); //flase
```
### some(任意)
> 判断每一个元素是否有任一满足条件，有的话返回true,否则返回flase
```
let a = [1,2,3];
a = a.some(function(value,i) {
    return value >2; //ture
})  
```