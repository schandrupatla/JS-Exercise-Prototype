/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
//   */
   
  
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach =[];
 }
 Person.prototype.eat = function(food){
    if(this.stomach.length  < 10){
      this.stomach.push(food);
    }
   }
   Person.prototype.poop = function(){
     if(this.stomach!==""){
       this.stomach = [];
     }
   }
   Person.prototype.toString = function(){
      console.log(`${this.name}, ${this.age}`);
      return `${this.name}, ${this.age}`;
     }
    //const p1 = new Person('Savi',20);
 
  
 
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
   this.model = model,
   this.milesPerGallon = milesPerGallon,
    this.tank = 0,
    this.odometer = 0
  }
  Car.prototype.fill = function(gallons){
    return this.tank = this.tank + gallons;
  }
  Car.prototype.drive = function(distance){
    const drivableMiles = this.tank * this.milesPerGallon;
    if(distance <= drivableMiles){
      this.odometer = this.odometer + distance;
      this.tank = this.tank - (distance/this.milesPerGallon);
    }
    else {
      this.odometer = this.odometer + drivableMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles! `;
    }
  }
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   this.favoriteToy = favoriteToy,
   Person.call(this, name, age);//1.explicit binding //2. Telling the child to inherit the parent's attributes by passing them tp parent

  }

  Baby.prototype = Object.create(Person.prototype);//1.inherit the Person's methods //2. Telling the child to inherit the parent's methods 

  Baby.prototype.play = function() {
    // console.log("Task-3: ", `Playing with ${this.favoriteToy}`);
    return `Playing with ${this.favoriteToy}`;
  }

  // const b1 = new Baby('Stryker', 2, 'soft toy');//New binding
  // b1.eat('chicken');
  // console.log("Baby Stomach : ", b1.stomach);
  // console.log("Baby Parent Method toString : ", b1.toString());//Explicit binding
  // console.log("Baby play method : ", b1.play());
  // console.log("Baby Parent constructor Name : ", b1.name);
  

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    This keyword refers to an object, that object which is executing the current bit of javascript code.
    1. Principle 1: Window/Global Object Binding
    2. Implicit Binding
    3. New binding
    4. Explicit binding
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}