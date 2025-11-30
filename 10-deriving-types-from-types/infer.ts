function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type AddFnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type AddFnReturnValueType = AddFnReturnType<AddFn>;

