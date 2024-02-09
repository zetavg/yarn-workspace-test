import sum from '@yarn-workspace-test/sum';

export default function plusTwo(a: number) {
  return sum(a, 2 as string);
}

const a: number = '123';
