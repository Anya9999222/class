import Character from '../js/character';

test('create new character', () => {
  const character = new Character('Anna', 'Daemon');
  const correct = {
    name: 'Anna',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(character).toEqual(correct);
});

test('Should throw an error because of invalid name ', () => {
  expect(() => {
    new Character('A', 'Daemon');
  }).toThrow(new Error('incorrect name'));
});

test('should throw an error because of invalid type', () => {
  expect(() => {
    new Character('Anna', 123);
  }).toThrow(new Error('Invalid type'));
});
