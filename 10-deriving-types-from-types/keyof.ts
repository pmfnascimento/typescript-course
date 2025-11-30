type User = { name: string; age: number };
type UserKeys = keyof User;

let validkey: UserKeys;

validkey = "name";
validkey = "age";
