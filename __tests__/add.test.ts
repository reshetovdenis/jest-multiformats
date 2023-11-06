import { expect } from 'chai';
import { add } from '../src/index';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3);
    expect(add(-1, 1)).to.equal(0);
  });
});