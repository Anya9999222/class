export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    const searchedEl = this.type;
    function findEl(element) {
      return element === searchedEl;
    }
    const actualType = types.find(findEl);

    if (typeof this.type !== 'string' || !actualType) {
      throw new Error('Invalid type');
    }
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('incorrect name');
    }
  }
}