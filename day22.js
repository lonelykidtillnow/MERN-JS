//1. Spread - unpack element into individual element

//Array spread
let arr=[1,2,3];
console.log(...arr,4,5);    //copy

let arr1=[1,2,3,4];
let arr2=[1,3,5,7];
console.log(...arr2,...arr1,8,9,10);    //concatenation

//Object spread
let person={name:"rajesh",age:21};
let person1={...person,gender:"male"};  //copy
console.log(person1);

let x={name:"same",age:2,gender:"male"};
let y={...x,gender:"female",martialstaus:"yes"};   //concatenation ,object won't repeat
console.log(y);


//2. Rest - pack all element into array
//Note: Rest will always should be at last

//function
function add(a,b,c,...rest){
    console.log(rest);
    console.log(a,b,c);
    console.log(a+b+c);
}
let array=[1,2,3,4,5,6,7]
add(...array)


//string method
let string="hello world";
let string1="hello world";
//length
console.log(string.length);
//split (antha word remove panitu split pannum)
console.log(string.split("o"));
console.log(string1.split(" "));
//uppercase
console.log(string.toUpperCase());
//lowercase
console.log(string.toString());


//array destructing [onfly]
var a=[1,2,3,4,5,6,7];
var [q,w,e,r,t]=a;  //[q,w,e,r,t]=[1,2,3,4,5,6,7]
console.log(q,w,t);

//object destructing [onfly]
var c={name:"sam",age:21,gender:"male"};
var {name,age}=c;
console.log(name,age);


//more on array method
var array2=[1,2,3,4,5];
//1.Map - it like an for loop, always return in array
const res=array2.map((i)=>{
    console.log(i)
    return i;
})
console.log(res);
//2.Fliter - it also like an for loop give a condtion,always return in array
const res1=array.filter((i)=>{
    return i>2;
})
console.log(res1);
//3.Reduce
const res2=array2.reduce((accumalator,currentvalue)=>{
    return accumalator+currentvalue;
})
console.log(res2);