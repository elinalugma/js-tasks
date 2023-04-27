class Car {
  constructor(brand, model, year, color, price){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color; 
    this.price = price;
  }
}
let mycar = new Car("mercedes", "gt220", "2023", "black", "120000$");
console.log(mycar);
