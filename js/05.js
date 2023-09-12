class Car {
    static getSpecs(car) {
      console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
  
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
      this.speed = speed;
      this._price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = isOn;
      this.distance = distance;
    }
  
    get price() {
      return this._price;
    }
  
    set price(value) {
      this._price = value;
    }
  
    turnOn() {
      this.isOn = true;
    }
  
    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  
    accelerate(value) {
      if (this.speed + value <= this.maxSpeed) {
        this.speed += value;
      }
    }
  
    decelerate(value) {
      if (this.speed - value >= 0) {
        this.speed -= value;
      }
    }
  
    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  }
  