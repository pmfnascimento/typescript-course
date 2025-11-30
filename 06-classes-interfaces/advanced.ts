class User {
    constructor(private firstName: string, private lastName: string) { }

    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user = new User('Max', 'Müller');

console.log(user.fullName);

