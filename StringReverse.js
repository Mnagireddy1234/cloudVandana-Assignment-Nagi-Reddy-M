JavaScript.
1.Take a sentence as an input and reverse every word in that sentence. 
   Example - This is a sunny day > shiT si a ynnus yad.
	
Solution:	
let string="This is a sunny day";
let revstr=string =>{
	let str=string.split(" ");
	let rev=str.map(s=>{
		return s.split('').reverse().join("");
	});
	return rev.join(" ");
}
document.write(revstr(string));

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="StringReverse.js"></script>
</head>
<body>

</body>
</html>
