// const mainUserName = "John Doe";

// const greeting = `Hi, there ${mainUserName}`;

// console.log(greeting);

type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventsNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFileEventsNames]: () => void;
};
