JavaScript.
  
2.Perform sorting of an array in descending order.
  
solution:  
let flowers=["Rose","Jasmine","lotus","Daisy"];
flowers.sort((a,b)=>a.localeCompare(b));
flowers.reverse();
document.write(flowers);

document.write("<br>");
//performing on numbers

let number=[12,1,32,44,33];
number.sort((a,b)=>b-a);
document.write(number);

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="SortingArray.js"></script>
</head>
<body>

</body>
</html>
