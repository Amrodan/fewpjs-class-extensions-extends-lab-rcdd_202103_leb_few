 // Your code here

class Polygon {
  constructor(shape) {
    this.shape= shape;
this.count = this.shape.length
  }
  get countSides () {

 return this.count
  }


  get perimeter () {

return this.shape.reduce((acc,cvalue)=>acc+cvalue)

  }  }
  class Triangle extends Polygon {

    get isValid() {
      let side1 = this.shape[0]
      let side2 = this.shape[1]
      let side3 = this.shape[2]
      if (this.count  == 4) {
        return;
      }
      return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) )
    }
  }
class Square extends Polygon {
  get isValid() {
     let side1 = this.sides[0]
     let side2 = this.sides[1]
     let side3 = this.sides[2]
     let side4 = this.sides[3]
     if (this.count !== 4) {
       return;
     }
     return ( ( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ) && ( side3 === side4 ) )
   } }
