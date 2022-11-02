
//code writen by Vicky Sarkar

function checkPrime(number){
let factor=0;
for(let i=0;i<=number;i++){
	if(number%i==0){
	     factor++
	}

	if(factor==2){
		return true
	}else{
		return false
	}
}

let ans=checkPrime(30)

if(ans==true){
console.log(ans," Is a Prime Number")
}else{
	console.log(ans,"Is not a prime Number")
}
