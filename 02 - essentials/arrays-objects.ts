let hobbies: any[] = ['Sports', 'Cooking'];

hobbies.push(10);

hobbies.forEach(a => console.log(a));

let users: Array<string | number>;

users = ['10',5];
users = [5, 1];
users = ['Max', 'Ana'];

let possibleResults: [number, number];

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
    name: string,
    age: number | string,
    hobbies: string[],
    role: {
        description: string,
        id: number
    }
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: "Admin",
        id: 5
    }
};