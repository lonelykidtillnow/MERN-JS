Basic of Javascript

// single line comment 
/*
    multiline
    comment     
*/


// local run
    var a=10;
    var b=20;
    console.log(a+b);

// variable
    var a=10;
    let b="rajesh";
    const c=true;
    console.log(a,b,c);


//scope
    {
      var a=10;
      let b=20;
      const c=3.14;
    }
    console.log(a);
    console.log(b);
    console.log(c);


// post increment 
    var a=10;
    var b=a++;
    console.log("a:",a,"b:",b);


// pre increment
    var a=10;
    var b=++a;
    console.log("a:",a,"b:",b);


//arithmetric operator
     var a=10;
     var b=20;
     console.log(a+b,a-b,a*b,a/b,a%b);


//function
    function add(a,b){
        console.log(a+b);
    }
    add(10,20);


//function excerise
    var facor="Vijay";
    var fplayer="Messi";
    var fmovie="Hi Nanna";

    function favourite(a,b,c){
        console.log(a,b,c)
    }
    favourite(facor,fplayer,fmovie)


//if else
    var age=10;
    if(age>=18)     console.log("Adult");
    else            console.log("child");


//for loop
    for(var i=1;i<=10;i++){
        console.log(i);
    }


//primitive datatype
   var a=10;
    var b="rajesh";
    var c=false;
    console.log(typeof(a),typeof(b),typeof(c));


//non-primitive datatype

    //1.Array
    var a=[10,"raju","male",true];
    console.log(a);

    //access
    console.log(a[1]);
    console.log(a[0]);

    //modify
    a[1]="madesh";
    a[3]=false;
    console.log(a);

    //add
    console.log(a.push("age","name"));
    a.push(21,"rajesh")
    console.log(a);

    //delete 
    a.pop();
    console.log(a.pop());
    console.log(a);

    //length
    console.log(a.length);

    //array excerise
    var person=["rajesh",21,"male","lover[21,20,28]","gf{name:rajesh,age:21}"];
    console.log(person);
    console.log(person[3])
    console.log(person[4]);



    //2.object
    var b={name:"rajesh",age:21,gender:"male"}
    console.log(b);

    //access  - dot,bracket notation
    console.log(b.name);        //dot
    console.log(b["name"]);     //bracket

    //modify
    b.name="abishekk";
    b["age"]=22;
    console.log(b);

    //add
    b.college="sit"
    b["course"]="csbs";
    console.log(b);

    //delete
    delete b.college;
    delete b["course"];
    console.log(b);

    //object excercise
    var person={
    name:"rajesh",
    age:21,
    gender:"male",
    lover:["a","b","c"],
    gf:{
        name:"pooja",
        age:35,
        gender:"female"
        }
    }

    console.log(person);
    console.log(person.name);
    console.log(person.gf.name);    //dot notation

    console.log(person.age);
    console.log(person.gf["age"]);  //bracket notation

    console.log(person.lover[2]);
