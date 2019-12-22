### 在html中id和name的区别
+ 一个id只能出现一次
+ name可以多次出现
+ 在css中用‘#’识别id,用 "."识别class
+ name用于通用多次出现元素的样式定义，id用于唯一性元素样式定义

### js中 getElementsByName 和 getElementById的区别
+ getElementsByName, 该方法返回的是一个控件对象的数组集合
> 因此访问的时候需要指定数组的下标。
+ getElementsId，该方法直接返回控件对象。
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>getElementsByName和getElementById</title>
</head>
<body>
	<header>
		<nav>JavaScript 控制表单-通过name和id访问控件</nav>
	</header>
	<form name="formTraverse" method="get">
		<p>First Name: <input type="text" name="fname" id="id-fname"></p>
		<p>Last Name: <input type="text" name="sname" id="id-sname"></p>
		<input type="button" name="id-get-name" onclick="on_get_name();" value="获取用户名"/>
	</form>
	<!-- IMPORT JS -->
	<script type="text/javascript">
		function on_get_name() {
			var n_fname = document.getElementsByName("fname");
			var id_fname =document.getElementById("id-sname");
			console.log("First Name : " + n_fname[0].value); //返回first name中的值
			console.log("Last Name : " + id_fname.value); //返回last name中的值
		}
	</script>
</body>
</html>
```