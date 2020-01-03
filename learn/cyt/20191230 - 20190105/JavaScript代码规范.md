### 变量和函数的命名规则
### 空格,缩进,注释的使用规则
### 其他常用规范
+ 变量名使用驼峰法来命名
+ 空格运算符(= + * /)前后需要添加空格
+ 代码缩进，通常使用4个空格符号来缩进代码块
+ 一条语句通常以分号作为结束符
+ 将左花括号放在第一行的结尾
+ 左花括号前添加一空格
+ 将右花括号独立放在一行
+ 不要用分号结束一个复杂的声明
```
//函数:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
//循环:
for (i = 0; i < 5; i++) {
    x += i;
}
//条件语句:
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

```
+ 对象规则
>对象定义的规则:
1. 将左花括号与类名放在同一行。  
2. 冒号与属性值间有个空格。
3. 字符串使用双引号，数字不需要。
4. 最后一个属性-值对后面不要添加逗号。
5. 将右花括号独立放在一行，并以分号作为结束符号。
```
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
+ 每行代码字符小于80
+ 命名规则
    - 变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ lowerCamelCase）
    - 全局变量为大写 (UPPERCASE )
    - 常量 (如 PI) 为大写 (UPPERCASE )
+ HTML5 属性可以以 data- (如：data-quantity, data-price) 作为前缀。
+ CSS 使用 - 来连接属性名 (font-size)。
+ 下划线通常使用在SQL数据库中
+ js文件使用小写文件名