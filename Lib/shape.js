
const myShape = createShape('circle', 'red');
console.log(myShape.draw)


class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    printMetaData() {
        console.log(`the color is ${this.color} it says ${this.text} the text color is ${this.textColor}`)
    }
}
class Circle extends Shape {
    constructor(color, text, textColor, type){
        super(color, text, textColor);
        this.type = type;
    }
    printMetaData() {
        console.log(`the color is ${this.color} it says ${this.text} the text color is ${this.textColor} the shape is ${this.type}`)
    }
}
class Triangle extends Shape {
    constructor(color, text, textColor, type){
        super(color, text, textColor);
        this.type = type;
    } 
    printMetaData() {
        console.log(`the color is ${this.color} it says ${this.text} the text color is ${this.textColor} the shape is ${this.type}`)
    }
}
class Square extends Shape {
    constructor(color, text, textColor, type){
        super(color, text, textColor);
        this.type = type;
    }
    printMetaData() {
        console.log(`the color is ${this.color} it says ${this.text} the text color is ${this.textColor} the shape is ${this.type}`)
    }

    
}

const circleOne = new Circle('green', 'SVG','white', 'circle')


circleOne.printMetaData()
