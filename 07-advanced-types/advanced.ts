type DataStore = {
  [prop: string]: string[] | number | string | boolean | Object;
};

const store: DataStore = {};

store.id = 5;
store.isOpen = true;
store.name = "Max";
store.hobbies = ["Sports", "Cooking"];
store.address = {
  street: "Main Street",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
};

console.log(store);

let roles = ["admin", "guest", "editor"] as const;

const firstRole = roles[0];
console.log(firstRole);
