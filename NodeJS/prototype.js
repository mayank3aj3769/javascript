var student=function(){

    this.name="Mayank";
    this.age=24;
    this.email="rmayank331@gmail.com";
}

student.prototype={
    address:"New Delhi",
    getName:function(){
        return this.name;
    }
}
var stud =new student(); //creating object

console.log(stud);   
console.log(stud.address);