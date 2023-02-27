//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { a: 5}; // 5
object1.a = 4; // Now, 1,2,3 are 4.


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor (name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
	sound() {
		console.log(`I'm ${this.name}. I'm a ${this.color} ${this.type}!`);
	}
}

// Doing this extra class for exercise, don't need this for this particular solution

class Mammal extends Animal {
	constructor (name, type, color) {
		super(name, type, color);
	}
}

const cow = new Mammal('Bessy', 'cow', 'brown');
cow.sound();