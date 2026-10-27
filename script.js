let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let incArr=[]
	for(let i of arr)
		{
			incArr.push(Number(i)+1)
		}
	return incArr
}

alert(incrementArray(arr));
