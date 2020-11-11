type B = { hoge: string; fuga: number };
type DummyB = { hoge: string; fuga: number };
type ABC = { aa: number[]; bb?: B[]; cc?: { dd: string } };
const abc: ABC = {
  aa: [1, 2, 3],
  bb: [
    {
      hoge: 'bbbb',
      fuga: 11111,
    },
  ],
  // cc: { dd: 'hogeeee' },
};

const result: B[] = [];
abc.bb?.map((item) => result.push(item));
console.log(result);

const fuga = (result: B[]): DummyB[] => {
  const res = result.map((i) => i);
  return res;
};
console.log(fuga(result));
