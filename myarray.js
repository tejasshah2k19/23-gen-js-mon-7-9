let a = [] 


a.push(10) 
a.push(20)
a.push(30)


// console.log(a);
let sum = 0; 
for(i=0;i < a.length;i++){
    console.log(a[i]);
    sum  = sum  + a[i];
}

console.log(sum);
// a.pop()
// console.log(a);

console.log(a);
a.splice(1,2); //index : 1 , 1      1,2 
console.log(a);

//7,3  -> 7 8 9 