import Character from '../js/character';
import Daemon from '../js/daemon';

let character;

beforeEach(() => {
  character = new Daemon('Anna', 'Daemon');
});
it('create new character', () => {
  character = new Daemon('Anna', 'Daemon');
  expect(character.name).toBe('Anna');
  expect(character.type).toBe('Daemon');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});
test('Should throw an error because of invalid name ', () => {
  expect(() => {
    character = new Character('A', 'Daemon');
  }).toThrow('incorrect name');
});

test('should throw an error because of invalid type', () => {
  expect(() => {
    character = new Character('Anna', 123);
  }).toThrow('Invalid type');
});
