import Zombie from '../js/zombie';

test('create new character correctly', () => {
  const zombie = new Zombie('Zombie');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Zombie', type: 'Zombie',
  };
  expect(zombie).toEqual(correct);
});
