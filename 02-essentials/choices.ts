// enum Role {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Guest = 'Guest'
// }

type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
    name: string,
    age: number,
    role: Role,
    permitions: string[]
}

let userRole: Role = 'admin';

userRole = 'admin';

let possibleResults: [1 | -1, 1 | -1];

possibleResults = [1, -1]; 

function access(role: Role) {

}


