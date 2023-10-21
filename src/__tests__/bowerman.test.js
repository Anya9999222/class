import Bowerman from '../js/bowerman';

test('create new character correctly', () => {
  const bowerman = new Bowerman('Bowman');
  const correct = {
    attack: 25, defence: 25, health: 100, level: 1, name: 'Bowman', type: 'Bowman',
  };
  expect(bowerman).toEqual(correct);
});
