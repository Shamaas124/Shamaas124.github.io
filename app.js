//Question1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];

for (var i = 0; i < itemsArray.length; i++) {
    var priceOfEach = itemsArray[i].price * itemsArray[i].quantity
    console.log(itemsArray[i].name + ": " + priceOfEach)
    var totalPrice = (priceOfEach + priceOfEach);
}
console.log(totalPrice)

//Question 2
const person = {name:"Shamaas",email:"asadad",password:"1213131", age:19,gender:"male",city: "Karachi",country: "Pakistan" };
if('age' || 'country' in Object){
    console.log("Present");
}else {
    console.log("Absent");
}

if('firstName' && 'lastName' in Object){
    console.log("It is present")
}else{
    console.log("Sorry")
}

//Question 3
var arr = [];
function user (name, age, gender, role){
    this.name = name;
    this.age = age; 
    this.gender = gender;
    this.role = role;
}
arr[0] = new user("Shamaas", 19, "male", "manager");
arr[1] = new user("Shamaas", 19, "male", "manager");
arr[2] = new user("Shamaas", 19, "male", "manager");
arr[3] = new user("Shamaas", 19, "male", "manager");
for(var i =0; i<arr.length; i++){
    console.log(arr[i])
}

//Question 4
function people (name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var peoples = new people("Abdul", "male", "soldier bazaar", "Bachelor", "Student")

console.log(peoples);





















