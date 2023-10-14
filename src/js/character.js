export default class Character {
  constructor(name, type) {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error('Invalid type');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('incorrect name');
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }
}
