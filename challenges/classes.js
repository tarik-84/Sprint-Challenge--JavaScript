// 1. Copy and paste your prototype in here and refactor into class syntax.
function CuboidMaker (length, width, height){
    this. length = length;
    this.width = width;
    this.height = height;
  }
  CuboidMaker.prototype.volume = function(length, width, height){
    return length * width * height
  }
  CuboidMaker.prototype.surfaceArea = function(length, width, height){
    return 2 * ((length * width) + (length * height) + (width * height))
  }
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those me

class CuboidMaker {
    constructor (length, width, height){
      this. length = length;
      this.width = width;
      this.height = height;
    }
    volume (length, width, height){
        return length * width * height;
    }
    surfaceArea (length, width, height){
        return 2 * ((length * width) + (length * height) + (width * height))
      }
}

 console.log(cuboid.volume(4, 5, 5)); // 100
 console.log(cuboid.surfaceArea(4, 5, 5)); // 130