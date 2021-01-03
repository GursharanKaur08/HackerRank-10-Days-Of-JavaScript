/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
  class Polygon
    {
        constructor(sides){
        this.sides = sides;
    }
    
    perimeter() 
    {
        let sides = this.sides;
        let peri = 0;
        for(let i=0; i<sides.length; i++)
        {
            peri = peri + parseInt(sides[i]);
        }
        return peri;
    }
  }

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());