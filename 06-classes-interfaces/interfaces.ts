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

class Authenticatable implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login() {}

  logout() {}
}

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
