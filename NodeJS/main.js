console.log("Hello World");
a=1;
b=2;
c=a+b;
var users=(a,b)=>{

console.log(`Addition of ${a} and ${b}=${c}`);
}
users(a,b);

module.exports.username=users; // object 'users' is exported to the file where require function is used .