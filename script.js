function threeSum(arr, target) {
// write your code here
	let initialDiff = Infinity, ans = -1;
	let n = arr.length;
	for(let i=0; i<n-2; i++){
		for(let j=i+1; j<n-1; j++){
			for(let k=j+1; k<n; k++){
				let sum = arr[i]+arr[j]+arr[k];
				let diff = Math.abs(sum - target);
				if(diff < initialDiff){
					ans = sum;
				}
			}
		}
	}
	return sum;
}

module.exports = threeSum;
