// interface Authenticatable {
//   role: string;
// }
var Authenticatable = /** @class */ (function () {
    function Authenticatable(email, password) {
        this.email = email;
        this.password = password;
    }
    Authenticatable.prototype.login = function () { };
    Authenticatable.prototype.logout = function () { };
    return Authenticatable;
}());
// ...
function authenticate(user) {
    user.login();
}
var user;
user = {
    email: "test@email.com",
    password: "123",
    login: function () {
        console.log("Logout");
    },
    logout: function () {
        console.log("Logout");
    },
    role: "Admin",
};
user.login();
