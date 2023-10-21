import Swordsman from '../js/swordsman';

test('create new character correctly', () => {
  const swordsman = new Swordsman('Swordsman');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman',
  };
  expect(swordsman).toEqual(correct);
});
