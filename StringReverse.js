let string="This is a sunny day";
let revstr=string =>{
	let str=string.split(" ");
	let rev=str.map(s=>{
		return s.split('').reverse().join("");
	});
	return rev.join(" ");
}
document.write(revstr(string));
