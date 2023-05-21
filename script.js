let arr = [
	{ name: 'sdfdsf', id: 23, nums: [23, 56, 577, 686] },
	{ name: 'wewef', id: 43, nums: [23, 45, 34, 23] },
	{ name: '3434', id: 6767, nums: [45, 45, 23, 686] },
];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

var sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum = sum + arr[i].nums[0];
}

// var sum = arr.reduce((index, obj, acc) => {
// 	acc += obj.nums[0];
// 	return acc;
// }, 0);

console.log(sum);

console.log('test');

console.log('test2');
