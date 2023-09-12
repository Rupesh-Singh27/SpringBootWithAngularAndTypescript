export { }
class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastName: string){
        this._lastName = lastName;
    }
}

//Intializing the instance of the Customer class 
let myCustomer = new Customer("Rupesh", "Singh")

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
