function Car(make, model, year, owner) {
  var make1 = make;
  console.log(make1);
  this.model = model;
  this.year = year;
  this.owner = owner;
}

var car1 = new Car("Eagle", "Talon TSi", 1993, "rand");
console.log(car1.make);
