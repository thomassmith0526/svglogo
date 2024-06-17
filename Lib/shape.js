function createShape(type, color){
    return {
        type: type,
        color: color,
        draw: function(){
            return `Drawing a ${this.color} ${this.type} shape`;
        }
    }
}
const myShape = createShape('circle', 'red');
console.log(myShape.draw)