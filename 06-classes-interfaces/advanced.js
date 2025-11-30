var User = /** @class */ (function () {
    function User() {
        this._firstName = '';
        this._lastName = '';
    }
    Object.defineProperty(User.prototype, "firstName", {
        set: function (name) {
            if (name.trim() == '') {
                throw new Error('First name cannot be empty');
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        set: function (name) {
            if (name.trim() == '') {
                throw new Error('Last name cannot be empty');
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getFirstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getLastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
user.firstName = 'Max';
user.lastName = '';
console.log(user.fullName);
