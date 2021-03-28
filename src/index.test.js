import { main } from './index.mjs';

describe('Challenge', () => {
  it('Runs the function correctly', () => {
    const result = main();
    expect(result).toBe('Hi!');
  });
});