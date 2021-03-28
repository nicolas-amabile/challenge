/* Exercise 1: Pair Programming
 *
 * Pair programming is an agile software development technique in which two programmers work together
 * at one workstation. One, the `driver`, writes code while the other, the `observer` or navigator reviews
 * each line of code as it is typed in.
 *
 * Goal:
 *
 * - Everyone gets the 2 roles (driver and observer) but only once.
 * - In a real world, the same pair will switch roles, BUT for this exercise, two people cannot exchange with each other.
 *   For example, we will never have [{ driver: 'Zidane', observer: 'Messi' }, { driver: 'Messi', observer: 'Zidane' }];
 *
 * Input: array of Pair Programming participants
 * Output: array of pairing objects
 * ie [{ driver: 'Zidane', observer: 'Messi' }, ...];
 */


export const pairProgramming = (participants) => participants;

export const testParticipants = ['Zidane', 'Ronaldo', 'Messi', 'Ibrahimovic', 'Henry', 'Suarez'];

console.log(pairProgramming(testParticipants));

// =============================================================================