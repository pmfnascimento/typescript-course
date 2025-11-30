interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
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
};
