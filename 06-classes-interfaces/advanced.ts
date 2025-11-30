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
}

const user = new User();
user.firstName = 'Max';
user.lastName = '';
console.log(user.fullName);

