 class Car {
     car(data) {
         this.model = data.model;
         this.brand = data.brand;
         this.color = data.color;
         this.year = data.year;
         this.price = data.price;
     }
     getModel() {
         return this.model;
     }
     setModel(model) {
         this.model = model;
     }
     getBrand() {
         return this.brand;
     }
     setBrand(brand) {
         this.brand = brand;
     }
     getColor() {
         return this.color;
     }
     setColor(color) {
         this.color = color;
     }
     getYear() {
         return this.year;
     }
     setYear(year) {
         this.year = year;
     }
     getPrice() {
         return this.price;
     }
     setPrice(price) {
         this.price = price;
     }
 }
 export default Car;