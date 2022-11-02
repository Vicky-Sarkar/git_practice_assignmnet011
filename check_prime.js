
//code writen by Vicky Sarkar

function checkPrime(number)
let factor=0;
for(let i=1;i<=number;i++){
	if(number%i==0){
		facator++
	}

	if(factor==2){
		return true
	}else{
		return false
	}
}

let number=30
let ans=checkPrime(number)

if(ans==true){
console.log(number," Is a Prime Number")
}else{
	console.log(number,"Is not a prime Number")
}
