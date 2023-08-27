// //1
// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   area(): number {
//     return this.width * this.height;
//   }
// }

// //2
// class Square extends Rectangle {
//   constructor(width: number) {
//     super(width, width);
//   }
// }

// //3
// class Shape {
//   constructor() {}
//   info(): string {
//     return `This is a Shape`;
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   info(): string {
//     return `This is a rectangle`;
//   }

//   area(): number {
//     return this.width * this.height;
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;
//   constructor(width: number, height: number, color: string) {
//     super(width, height);
//     this.color = color;
//   }
//   info(): string {
//     return `This is a rectangle ${this.color}`;
//   }
// }

// //4
// class Shape {
//   constructor() {}
//   info(): string {
//     return `This is a Shape`;
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   info(): string {
//     return `This is a rectangle`;
//   }

//   area(): number {
//     return this.width * this.height;
//   }

//   scale(x: number): this {
//     this.width *= x;
//     this.height *= x;
//     return this;
//   }

//   static twoRectangle(Rectangle1: Rectangle, Rectangle2: Rectangle): Rectangle {
//     const newRectangle = new Rectangle(
//       Rectangle1.width + Rectangle2.width,
//       Rectangle1.height + Rectangle2.height
//     );
//     return newRectangle;
//   }
// }

//5
class Shape {
  constructor() {}
  draw(): void {
    console.log(`drawing a shape`);
  }
}

class Triangle extends Shape {
  draw(): void {
    console.log(`drawing a Triangle`);
  }
}

class Circle extends Shape {
  draw(): void {
    console.log(`drawing a Circle`);
  }
}

class Square extends Shape {
  draw(): void {
    console.log(`drawing a  Square`);
  }
}

function renderShapes(arr: Shape[]): void {
  arr.forEach((element) => {
    element.draw();
  });
}
