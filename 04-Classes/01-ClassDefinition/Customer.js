var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//Intializing the instance of the Customer class 
var myCustomer = new Customer("Rupesh", "Singh");
// myCustomer.firstName = "Rupesh";
// myCustomer.lastName = "Singh";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
