var size = 10;

list = '#'+" ";
list1 = " "+'#';

for (var i = 1; i <= size; i++){
	if(i%2 !== 0){
		console.log(list.repeat(size/2));
	} else{
		console.log(list1.repeat(size/2));
	}
}