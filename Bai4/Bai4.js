let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.canvas.width = 1000;
context.canvas.height = 1000;
class Rectangle {
    height;
    width;
    x;
    y;
    color;

    constructor(height, width, x, y, color) {
        this.length = length;
        this.width = width;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    getHeight() {

        return this.height;
    }

    getWidth() {
        return this.width;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y
    }

    setColor(color) {
        this.color = color
    }

    render(text) {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }
}
    let rectangle = new Rectangle(100,150,10,10,'#9400D3');

    rectangle.setColor('#DC143C');
    rectangle.render();

