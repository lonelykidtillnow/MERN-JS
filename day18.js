// older way
const response=fetch("https://dummyjson.com/users");
response.then((e)=>{
    return e.json();     //Asynchronous
})
.then((e)=>{
    console.log(e);     //promise <fulfilled>
})
.catch((e)=>{
    console.log(e);    //promise <rejected>
})

//newer way
async function api(){
    try{
        const response=await fetch("https://dummyjson.com/carts");
        const answer=await response.json();   //promise <fulfilled>
        console.log(answer);
    }
    catch(err){
        console.log(err);      //promise <rejected>
    }
}
api();


// 💬 .then() version:
// Like saying: "First do this, then do that, then another thing."
// .catch() used for error handling

// 💬 async/await version:
// Like saying: "Do this... wait... then continue smoothly."
// try/catch block used for error handling
// await pauses the function until the promise resolves (no need to chain .then()).