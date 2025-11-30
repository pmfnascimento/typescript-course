var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    User.greet = function () {
        console.log('Hello');
    };
    User.eid = 'USER';
    return User;
}());
console.log(User.eid);
User.greet();
var user = new User();
user.firstName = 'Max';
user.lastName = 'Müller';
console.log(user.fullName);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_salary) {
        var _this = _super.call(this) || this;
        _this._salary = _salary;
        _this._salary = _salary;
        return _this;
    }
    Employee.prototype.work = function () {
        this._firstName = 'Max';
        this._lastName = 'Müller';
        console.log(this.fullName);
    };
    return Employee;
}(User));
var employee = new Employee(1000);
employee.work();
