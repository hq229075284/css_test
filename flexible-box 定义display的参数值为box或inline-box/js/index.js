var i = {
	"one": 1,
	"two": 2
};
var j = 123;
a = (function(i, j) {
	i.one = 2;
	j = 12;
	console.log(i);
	console.log(j);
	return j;
})(i, j);
console.log(i);
console.log(j);

var a=[1,2,3,4,5,6,7,8,9];
$.each(a,function(i,v){
	console.log(v);
});
