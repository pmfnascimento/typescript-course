class User {
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName(name: string) {
        if (name.trim() == '') {
            throw new Error('First name cannot be empty');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() == '') {
            throw new Error('Last name cannot be empty');
        }
        this._lastName = name;
    }

    get getFirstName() {
        return this._firstName;
    }

    get getLastName() {
        return this._lastName
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    static eid = 'USER';

    static greet() {
        console.log('Hello');
    }
}

console.log(User.eid);
User.greet();

const user = new User();
user.firstName = 'Max';
user.lastName = 'Müller';
console.log(user.fullName);

class Employee extends User {

    constructor(private _salary: number) {
        super();
        this._salary = _salary;
    }
}

