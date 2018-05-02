class Contact {
    constructor(name, email, phoneNumber, relationship){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.relationship = relationship;
    }
}

class AddressBook {
    constructor(name, email, phoneNumber, relationship){
        this.contacts = [];
        let brandon = new Contact("Brandon", "bkbolt@email.com", "222-444-8888", "Brother from another Mother");
        this.contacts[0] = brandon;
        let anthony = new Contact("Anthony", "anthony@gmail.com", "123-456-7890", "High School Friend");
        this.contacts[1] = anthony;
    }
    submitContact(){
        let name = prompt("Enter contact name");
        let email = prompt("Enter your contact email");
        let phoneNumber = prompt("Enter your contact phone number");
        let relationship = prompt("Enter our relationship");

        let newFriend = new Contact(name, email, phoneNumber, relationship);
        this.contacts.push(newFriend);
    }
    deleteAt(){
        let index = prompt("Type the register number of the contact you want deleted.");
        this.contacts.splice(index, 1);
    }
    print(){
        console.log(this.contacts);
    }
}
let book = new AddressBook();

while(true){
    let input = prompt("Do you wish to (add), (delete), (print), or (quit)?");
    if (input === "add"){
        book.submitContact();
    }
    else if (input === "delete"){
        book.deleteAt();
    }
    else if (input === "print"){
        book.print();
    }
    else if (input === "quit"){
        console.log("Goodbye.");
        break;
    }
    else{
        console.log("Sorry I didn't understand that.");
        console.log("Let's try that again.")
    }
}
