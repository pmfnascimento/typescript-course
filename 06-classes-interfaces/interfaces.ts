interface Authenticatable {
  email: string;
  password: string;
  role: string;

  login(): void;
  logout(): void;
}

// interface Authenticatable {
//   role: string;
// }

let user: Authenticatable;

user = {
  email: "test@email.com",
  password: "123",
  login() {
    console.log("Logout");
  },
  logout() {
    console.log("Logout");
  },
  role: "Admin",
};
