import * as React from 'react';
import { sum } from 'utils';

export const Sum = ({ a, b }: { a: number; b: number }) => {
  return <div>{sum(a, b)}</div>;
};
