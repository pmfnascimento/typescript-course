const appUser = {
  name: "Max",
  age: 35,
  permissions: [{ id: 1, title: "title", description: "description" }],
};

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: number;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser["permissions"];


