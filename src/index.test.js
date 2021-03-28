import { pairProgramming, testParticipants } from './index.mjs';

describe('Challenge', () => {
  it('Exercise 1: Pair programming', () => {
    const result = pairProgramming(testParticipants);
    expect(result).toBe([]); // ie [{ driver: 'Zidane', observer: 'Messi' }, ...];
  });
});