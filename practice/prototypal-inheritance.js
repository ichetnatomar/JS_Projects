
//Contructor function, 
// added details() function inside constructor function prototpe, so that every object created using it can share this prototype.
// In other words, all objects created using constructor function, will have their [[prototype]] objects pointing to Constructor function's prototype object.

function Parent() {
  Parent.prototype.details = function () {
    console.log('Father name is K S Tomar');
  }
}

const child1 = new Parent();
child1.details();


const child2 = Object.create(Parent.prototype);
child2.details();



// *************************************************

//Prototype Object
const carPrototype = {
  carDetails() {
    console.log(`name: ${this.name}, model: ${this.model}, year: ${this.year}`);
  }
};


//demonstrating Prototypal Inheritance by using a prototype object, and using it to create objects using Object.create

const car1 = Object.create(carPrototype);
car1.name = "BMW";
car1.model = "A Series";
car1.year = "2021";
car1.type = 'Sedan';
car1.carDetails(); //name: BMW, model: A Series, year: 2021



carPrototype.carDetails2 = function () {
  console.log(`type: ${this.type}`);
}

car1.carDetails2(); //type: Sedan
//all objects shared same prototype object, no new protype is created. That is why changes made to the Prototype Object reflect to all objects' prototype because they all are pointing to that same prototype object only.



