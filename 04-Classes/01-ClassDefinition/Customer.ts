class Customer {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Intializing the instance of the Customer class 
let myCustomer = new Customer("Rupesh", "Singh");

// myCustomer.firstName = "Rupesh";
// myCustomer.lastName = "Singh";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
