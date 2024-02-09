import plusTwo from '@yarn-workspace-test/plus-two';

export default function plusFour(a: number) {
  return plusTwo(plusTwo(a));
}
