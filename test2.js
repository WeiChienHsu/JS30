var a = [23,24,44,54];
var b = [11,42,54,33];
var c = [32,33,12,30];

var question = [a,b,c];
var result = [];

for (var i = 0; i < question[0].length; i++){
	var temp = 0;
	for(var j = 0; j < question.length; j++){
		temp += question[j][i]
	}
	result.push(temp);
}

console.log(result);