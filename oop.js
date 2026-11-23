/*
OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT
Run these examples with: node oop.js

OOP groups related data and behavior into objects. Think of a game character:
its name and energy are data; jumping and resting are things it can do.
A property stores data. A method is a function that belongs to an object.
*/

// 1. Start with one object. An object literal uses { } to list its properties.
const firstPlayer = {
  name: 'Mina',
  score: 0,
  earnPoint() {
    this.score += 1; // With firstPlayer.earnPoint(), `this` is firstPlayer.
  },
};

firstPlayer.earnPoint();
console.log('1. One object:', firstPlayer.name, firstPlayer.score); // Mina 1

/*
2. A class defines how to create similar objects. `new` creates an instance
and calls the constructor, which gives that instance its starting values.
The instances share the methods, but each keeps its own data.

3. Encapsulation means keeping some details inside the object. `#energy` is
private. Other code can ask the character to act or read its energy, but it
cannot bypass the rules by assigning directly to `#energy`.
*/
class Character {
  #energy = 2;

  constructor(name) {
    this.name = name;
  }

  get energy() {
    return this.#energy; // A getter is read like a property, without parentheses.
  }

  act() {
    if (this.#energy === 0) return `${this.name} needs a rest.`;
    this.#energy -= 1;
    return `${this.name} takes a step.`;
  }
}

const walker = new Character('Jo');
const anotherWalker = new Character('Ada');
console.log('2–3. Independent instances:', walker.act());
console.log('Energy left:', walker.energy, anotherWalker.energy); // 1 2

/*
4. Inheritance is an “is a” relationship: a Scout is a kind of Character.
`extends` gives Scout the parent's behavior. `super(name)` runs the parent
constructor before the child uses `this`. Defining `act` again overrides it.
`super.act()` explicitly calls the parent method, including its energy rules.
*/
class Scout extends Character {
  constructor(name, area) {
    super(name);
    this.area = area;
  }

  act() {
    if (this.energy === 0) return super.act();
    super.act();
    return `${this.name} scouts ${this.area}.`;
  }
}

const scout = new Scout('Tomi', 'the garden');

// 5. Polymorphism: the same call, character.act(), uses the method for that object.
for (const character of [walker, scout]) {
  console.log('4–5. Same method, different behavior:', character.act());
}

// 6. Composition is a “has a” relationship: a team has members; it isn't a character.
class Team {
  constructor(members) {
    this.members = [...members]; // Copy the array container, not the individual objects.
  }

  takeTurn() {
    return this.members.map(member => member.act()); // Ask each object to do its job.
  }
}

const team = new Team([anotherWalker, scout]);
console.log('6. A team turn:', team.takeTurn());

/*
Try it: Create another Scout, call act() three times, and watch what happens
when its energy runs out. Does the first Scout's energy change too?

Classes are useful when many objects share behavior. For a single calculation,
a plain function may be simpler. Next, open game.html: a Ship, Pulse, and Target
are types of Sprite, and the Game owns and coordinates those objects.
*/
