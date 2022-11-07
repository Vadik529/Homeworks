function Car(brand, year, hp) {
  this.brand = brand;
  this.year = year;
  this.hp = hp;

  this.id = `car-${Date.now()}`;

  this.owner = null;
}

Car.prototype.setOwner = function (user) {
  if (!User.prototype.isPrototypeOf(user)) return;
  user.setCar(this, false);

  this.owner = user;
};

function User(name, age) {
  this.name = name;
  this.age = age;

  this.id = `user-${Date.now()}`;

  this._cars = [];
}

User.prototype.setCar = function (car) {
  if (!Car.prototype.isPrototypeOf(car)) return;
  this._cars.push(car);
};

User.prototype.getCars = function () {
  return this._cars;
};
