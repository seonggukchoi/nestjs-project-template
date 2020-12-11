export type MockClassType<T> = {
  [P in keyof T]: typeof jest.fn;
};
