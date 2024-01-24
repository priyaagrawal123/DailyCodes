const jsuser={
    name:"priya",
    age:"12"
}

console.log(jsuser.name);
console.log(jsuser["age"]);
jsuser.name="priya"
Object.freeze(jsuser)
jsuser.name="agrawal"
console.log(jsuser);

const fullname={
    userfullname:{
        firstname:"Priya",
            secondname:'Narendra',
    
                thirdname:"Agrawal"
    
        }
    }
    console.log(fullname)

    const obj1={1:"a",2:"b"};
    const obj2={3:"a",4:"b"};

    const obj3=obj.assign(obj1,obj2);
    console.log(obj3)
