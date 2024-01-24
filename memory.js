let email="priyadottcom";
let anothername=email;
anothername="chaicode"
console.log(email)
console.log(anothername); //stack 
//bcoz isme email ka value wahi rahega ,aur anothername ka change hoga

let userone={
    email:"user@gmail.com",
    id:"23",
}
let usertwo=userone
usertwo.email="priya@gmail.com"
console.log(userone) //heap
console.log(usertwo) //both will give "priya@gmail.com" ,bcoz heap original value deta copy nai karta