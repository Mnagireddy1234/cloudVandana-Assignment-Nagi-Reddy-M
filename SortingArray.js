let flowers=["Rose","Jasmine","lotus","Daisy"];
flowers.sort((a,b)=>a.localeCompare(b));
flowers.reverse();
document.write(flowers);

document.write("<br>");
//performing on numbers

let number=[12,1,32,44,33];
number.sort((a,b)=>b-a);
document.write(number);