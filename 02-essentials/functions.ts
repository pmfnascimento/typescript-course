function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => console.log(msg);

function performeJob(cb: (m:string) => void) {
    cb("Job Done!");
}

performeJob(log);

type Users = {
    name: string,
    age: number,
    greet: () => string
};

let users: Users = {
    name: 'Max',
    age: 82,
    greet: () => "Hi There!"
}
