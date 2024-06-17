const inquirer = require("inquirer")
const fs = require("fs")
const svg = require("svg")

function promptUser() {
    return inquirer.prompt([
        {
            type : "input",
            message: "What is the name of the company?",
            name: "company",
        }
    ])
}


class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, type){
        super(color);
        this.type = type;
    }
}
class Triangle extends Shape {
    constructor(color, type) {
        super(color);
        this.type = type;
    } 
}
class Square extends Shape {
    constructor(color, type) {
        super(color);
        this.type = type;
    }
}