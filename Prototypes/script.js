//Difference btw traditional and Arrow methods when used inside objects.
// traditional method points to parent object
// Arrow method points to {}empty global object, or window object, since it doesnt have THIS BINDING, it inherits this from the enclosing scope(window or global)


const car1 = {
  name: "BMW",
  type: 'SEDAN',

  message: () => {
    console.log('Arrow function');
    console.log(`car name: ${this.name}, type: ${this.type}`);
    console.log(this);
  },

  message2: function () {
    console.log('Normal function');
    console.log(`Car name: ${this.name}, type: ${this.type},`, this);
    console.log(this);
  }
};

car1.message();
car1.message2();