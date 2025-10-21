import { foo } from './foo.js';

describe('foo', () => {
  it('should work', () => {
    expect(foo()).toEqual('foo');
  });
});
