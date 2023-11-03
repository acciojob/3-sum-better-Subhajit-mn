function threeSum(arr, target) {
// write your code here
	let closestSum = Number.MAX_VALUE;
	let n = arr.length;
	for(let i=0; i<n-2; i++){
		for(let j=i+1; j<n-1; j++){
			for(let k=j+1; k<n; k++){
				let sum = arr[i]+arr[j]+arr[k];
				if(Math.abs(target-closestSum) > Math.abs(target-sum)){
					closestSum = sum;
				}
			}
		}
	}
	return closestSum;
}

module.exports = threeSum;
