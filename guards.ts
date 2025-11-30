type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  path: "some/path/to/file.csv",
  type: "file",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: "some-connection-url",
  type: "db",
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  // if ("path" in source) {
  //   return;
  // }

  // if (source.type === "file") {
  //   console.log(source.path);
  //   return;
  // }

  if (isFile(source)) {
    console.log(source.path);
    return;
  }

  console.log(source.connectionUrl);
  return;
}
